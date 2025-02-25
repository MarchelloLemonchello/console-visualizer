import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";

const StringSpan = styled.span`
    color: #bfbfbf;
`

export const StringComponent: TTypeViewer = ({ data }) => {
  if (typeof data !== 'string') {
    throw new TypeError('ObjectViewer: data has invalid type');
  }

  return (
    <StringSpan>
      &#34;{data}&#34;
    </StringSpan>
  );
};