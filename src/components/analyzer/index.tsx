import React, { FC} from 'react';

import { NumberComponent} from "../number";
import { StringComponent } from "../string";
import { ObjectComponent } from "../object"
import { ArrayComponent } from "../array"
import { BigintComponent } from "../bigint";
import { FunctionComponent } from "../function"
import { UndefinedComponent } from "../undefined";
import { BooleanComponent } from "../boolean";
import { NullComponent } from "../null";
import { SymbolComponent } from "../symbol";

import {AnalyzerProps, TAny, TNestedDataRenderer, TTypeViewer} from "../../model/propsTypes";
import {Wrapper} from "../styleComponents";
import {MapComponent} from "../map";
import {MapItemComponent} from "../map/MapItem";

const map = new Map<TAny['type'], TTypeViewer>();

map.set('string', StringComponent);
map.set('number', NumberComponent);
map.set('object', ObjectComponent);
map.set('array', ArrayComponent);
map.set('function', FunctionComponent);
map.set('undefined', UndefinedComponent);
map.set('bigint', BigintComponent);
map.set('boolean', BooleanComponent);
map.set('null', NullComponent)
map.set('symbol', SymbolComponent)
map.set('map', MapComponent)
map.set('mapItem', MapItemComponent)


const renderData: TNestedDataRenderer = ({data, name, pre, post}) => {
  const Component = map.get(data.type);

  if (!Component) {
    throw new Error('Unknown type')
  }

  return   (<Wrapper>
    {pre}
    {name && <span>{name} : </span>}
    <Component data={data.value} renderNestedData={renderData} type={data.type} />
    {post}
  </Wrapper>)
}


export const Analyzer: FC<AnalyzerProps> = (options) => {
  return renderData(options)
};