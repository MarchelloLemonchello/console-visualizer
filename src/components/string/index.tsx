import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";
import {TypeText} from "../styleComponents";

const StringSpan = styled.span`
    color: #bfbfbf;
`

export const StringComponent: TTypeViewer = ({ data, type }) => {
  if (typeof data !== 'string') {
    throw new TypeError('StringComponent: data has invalid type');
  }

  return (
    <>
      <TypeText>{type}: </TypeText>
      <StringSpan>
        &#34;{data}&#34;
      </StringSpan>
    </>

  );
};