import React from 'react';
import styled from 'styled-components';
import {TTypeViewer} from "../../model/propsTypes";

 const NumberSpan = styled.span`
     color: #8ed38e;
 `

export const NumberComponent: TTypeViewer = ({ data }) => {
  if (typeof data !== 'number') {
    throw new TypeError('ObjectViewer: data has invalid type');
  }

  return (
    <NumberSpan>
      {data}
    </NumberSpan>
  );
};