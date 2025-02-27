import React from 'react';
import styled from 'styled-components';
import {TTypeViewer} from "../../model/propsTypes";
import {TypeText} from "../styleComponents";

const BigintSpan = styled.span`
    color: #d3ad8e;
`

export const BigintComponent: TTypeViewer = ({ data , type}) => {
  if (typeof data !== 'string') {
    throw new TypeError('BigintComponent: data has invalid type');
  }

  return (
    <>
      <TypeText>{type}: </TypeText>
      <BigintSpan>
        {data}
      </BigintSpan>
    </>
  );
};