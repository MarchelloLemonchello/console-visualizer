import React from 'react';
import {TTypeViewer} from "../../model/propsTypes";

export const FunctionComponent: TTypeViewer = ({ data }) => {
  if (typeof data !== 'string') {
    throw new TypeError('FunctionComponent: data has invalid type');
  }

  const dataWithLineBreak = data.split('\n')
  return (
    <>
      {dataWithLineBreak.map((line, i) =>
        <i key={i} style={{display: i?'block':'inline'}}>{line} </i>
      )}
    </>
  );
};