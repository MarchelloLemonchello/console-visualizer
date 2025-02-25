import React, {FC} from 'react';
import { Wrapper } from '../Wrapper';

export interface INumber {
  type: 'number';
  value: number;
}

interface NumberProps {
  data: number
}

export const Number: FC<NumberProps> = ({ data }) => {
  return (
    <Wrapper>
      {data}
    </Wrapper>
  );
};