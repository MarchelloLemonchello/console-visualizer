import React from 'react';
import {TTypeViewer} from "../../model/propsTypes";
import {ButtonExpand} from "../styleComponents";

export const ArrayComponent: TTypeViewer= ({ data, renderNestedData }) => {
  if (!Array.isArray(data)) {
    throw new TypeError('FunctionComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  return (
    <>
      <ButtonExpand onClick={() => setToggle(prev => !prev)}>
        {
          toggle
            ? "⏷"
            : "⏵"
        }
      </ButtonExpand>
      {"["}
      {
        toggle
          ? data.map((dataElement, i) =>
            renderNestedData({data: dataElement, post: data.length - 1 !== i ? "," : ""}),
          )
          : "..."
      }
      {"]"}
    </>
  );
};