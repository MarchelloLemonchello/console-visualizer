import React from 'react';

import { TTypeViewer } from "../../model/propsTypes";
import {ButtonExpand, ItemsCount, TypeText} from "../styleComponents";
import { ReactComponent as CaretDown } from "../../icons/caret-down.svg";
import { ReactComponent as CaretRight } from "../../icons/caret-right.svg";

export const ObjectComponent: TTypeViewer = ({ data , renderNestedData, type}) => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new TypeError('ObjectComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  const dataArray = Object.entries(data);
  const itemCount = ` ${dataArray.length} ${dataArray.length === 1 ? 'item' : 'items' }`;
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
      {"{"}
      {
        toggle
          ?
          dataArray.map((dataElement, i) => (
            <span key={i}>
              {renderNestedData({name: dataElement[0], data: dataElement[1], post: dataArray.length - 1 !== i ? " ," : ""})}
            </span>
          )

          )
          :
          "..."
      }

      {"}"}
      {!toggle && <ItemsCount>{itemCount}</ItemsCount>}
    </>
  )
};
