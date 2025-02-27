import React from 'react';
import styled from "styled-components";
import {TTypeViewer} from "../../model/propsTypes";

const TrueSpan = styled.span`
    color: #9dfbb6;
`
const FalseSpan = styled.span`
    color: #ffa698;
`

export const BooleanComponent: TTypeViewer = ({ data }) => {
  if (typeof data !== 'boolean') {
    throw new TypeError('BooleanComponent: data has invalid type');
  }
  return (
    <>
      {
        data
        ? <TrueSpan>
            True
          </TrueSpan>
        : <FalseSpan>
            False
          </FalseSpan>
      }

  </>)
};