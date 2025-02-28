import React from 'react';

import { TTypeViewer} from "../../model/propsTypes";
import {ButtonExpand, TypeText} from "../styleComponents";
import { ReactComponent as CaretDown } from "../../icons/caret-down.svg";
import { ReactComponent as CaretRight } from "../../icons/caret-right.svg";


export const MapComponent: TTypeViewer= ({ data, renderNestedData, type }) => {
  if (!Array.isArray(data)) {
    throw new TypeError('MapComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  const size = {
    type: 'number',
    value: data.length,
  } as const
  return (
    <>
      <TypeText>{type}({data.length}): </TypeText>
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
          ? <>
            {data.map((dataElement, i) => (
              <span key={i}>
                {renderNestedData({data: dataElement})}
              </span>
            ))}
            {renderNestedData({data:size, name: 'size'})}
            </>
          : "..."
      }
      {"}"}
    </>
  );
};