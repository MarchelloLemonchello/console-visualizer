import React from 'react';

import {TTypeViewer} from "../../model/propsTypes";
import {ButtonExpand, ItemsCount, TypeText} from "../styleComponents";
import { ReactComponent as CaretDown } from "../../icons/caret-down.svg";
import { ReactComponent as CaretRight } from "../../icons/caret-right.svg";


export const ArrayComponent: TTypeViewer= ({ data, renderNestedData, type }) => {
  if (!Array.isArray(data)) {
    throw new TypeError('ArrayComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  const itemCount = ` ${data.length} ${data.length === 1 ? 'item' : 'items' }`;
  return (
    <>
      <TypeText>{type}: </TypeText>
      <ButtonExpand onClick={() => setToggle(prev => !prev)}>
        {
          toggle
            ? <CaretDown />
            : <CaretRight />
        }
      </ButtonExpand>
      {"["}
      {
        toggle
          ? data.map((dataElement, i) =>
            <span key={i}>{renderNestedData({data: dataElement, post: data.length - 1 !== i ? " ," : ""})}</span>
          )
          : "..."
      }
      {"]"}
      {!toggle && <ItemsCount>{itemCount}</ItemsCount>}
    </>
  );
};