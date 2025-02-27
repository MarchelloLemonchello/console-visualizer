import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";

const NullSpan = styled.span`
    color: #937987;
`

export const NullComponent: TTypeViewer = ({ data }) => {
  if (data !== null) {
    throw new TypeError('NullComponent: data has invalid type');
  }
  return  ( <>
    <NullSpan>
      null
    </NullSpan>
  </>)
};