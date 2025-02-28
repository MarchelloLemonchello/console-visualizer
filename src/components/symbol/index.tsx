import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";
import {TypeText} from "../styleComponents";

const SymbolSpan = styled.span`
    color: #dd13dc;
`

export const SymbolComponent: TTypeViewer = ({ data, type }) => {
  if (typeof data !== 'string') {
    throw new TypeError('StringComponent: data has invalid type');
  }

  return (
    <>
      <TypeText>{type}: </TypeText>
      <SymbolSpan>
        {data}
      </SymbolSpan>
    </>

  );
};