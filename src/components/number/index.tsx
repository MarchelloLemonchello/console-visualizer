import React from 'react';
import styled from 'styled-components';
import {TTypeViewer} from "../../model/propsTypes";
import {TypeText} from "../styleComponents";

 const NumberSpan = styled.span`
     color: #8ed38e;
 `

export const NumberComponent: TTypeViewer = ({ data , type}) => {
  if (typeof data !== 'number') {
    throw new TypeError('NumberComponent: data has invalid type');
  }

  return (
    <>
      <TypeText>{type}: </TypeText>
      <NumberSpan>
        {data}
      </NumberSpan>
    </>
  );
};