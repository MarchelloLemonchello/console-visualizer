import React from 'react';

import { TTypeViewer } from "../../model/propsTypes";
import { ButtonExpand } from "../styleComponents";
import { ReactComponent as CaretDown } from "../../icons/caret-down.svg";
import { ReactComponent as CaretRight } from "../../icons/caret-right.svg";

export const MapItemComponent: TTypeViewer = ({ data , renderNestedData, type}) => {
  if (!data || typeof data !== 'object' || Array.isArray(data) || type !== 'mapItem' || !data.key || !data.value) {
    throw new TypeError('ObjectComponent: data has invalid type');
  }
  const [ toggle, setToggle ] = React.useState(false);
  return (
    <>
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
          <>
            {renderNestedData({data: data.key , name: 'key', post:' ,'})}
            {renderNestedData({data: data.value, name: 'value'})}
          </>
        : <span>
            {String(data.key.value)} {" =>"}
            {String(data.value.value)}
          </span>
      }
      {"}"}
    </>
  )
};
