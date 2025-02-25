import React, { FC} from 'react';

import { NumberComponent} from "../number";
import { StringComponent } from "../string";
import { ObjectComponent } from "../object"
import { ArrayComponent } from "../array"
import { FunctionComponent } from "../function"

import {AnalyzerProps, TAny, TNestedDataRenderer, TTypeViewer} from "../../model/propsTypes";
import {TypeText, Wrapper} from "../styleComponents";

const map = new Map<TAny['type'], TTypeViewer>();

map.set('string', StringComponent);
map.set('number', NumberComponent);
map.set('object', ObjectComponent);
map.set('array', ArrayComponent);
map.set('function', FunctionComponent);

const renderData: TNestedDataRenderer = ({data, name, pre, post}) => {
  const Component = map.get(data.type);

  if (!Component) {
    throw new Error('Unknown type')
  }

  return   (<Wrapper>
    {pre}
    {name && <span>{name} : </span>}
    <TypeText>{data.type}: </TypeText>
    <Component data={data.value} renderNestedData={renderData} />
    {post}
  </Wrapper>)
}


export const Analyzer: FC<AnalyzerProps> = (options) => {
  return renderData(options)
};