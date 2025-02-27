import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";

const UndefinedSpan = styled.span`
    color: #959595;
`

export const UndefinedComponent: TTypeViewer = ({ data }) => {
  if (typeof data !== 'undefined') {
    throw new TypeError('UndefinedComponent: data has invalid type');
  }
  return  ( <>
    <UndefinedSpan>
      undefined
    </UndefinedSpan>
  </>)
};