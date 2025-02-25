import React from 'react';
import { TTypeViewer } from "../../model/propsTypes";
import { ButtonExpand } from "../styleComponents";

export const ObjectComponent: TTypeViewer = ({ data , renderNestedData}) => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new TypeError('ObjectComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  const dataArray = Object.entries(data);
  return (
    <>
      <ButtonExpand onClick={() => setToggle(prev => !prev)}>
        {
          toggle
            ? "⏷"
            : "⏵"
        }
      </ButtonExpand>
      {"{"}
      {
        toggle
          ?
          dataArray.map((dataElement, i) =>
            renderNestedData({name: dataElement[0], data: dataElement[1], post: dataArray.length - 1 !== i ? "," : ""})
          )
          :
          "..."
      }

      {"}"}
    </>
  )
};
