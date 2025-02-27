import React from 'react';
import {TTypeViewer} from "../../model/propsTypes";
import {TypeText} from "../styleComponents";

export const FunctionComponent: TTypeViewer = ({ data, type }) => {
  if (typeof data !== 'string') {
    throw new TypeError('FunctionComponent: data has invalid type');
  }

  const dataWithLineBreak = data.split('\n')
  return (
    <>
      <TypeText>{type}: </TypeText>
      {dataWithLineBreak.map((line, i) =>
        <i key={i} style={{display: i?'block':'inline'}}>{line} </i>
      )}
    </>
  );
};