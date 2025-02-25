import React, {FC} from 'react';
import { Wrapper } from '../Wrapper';

export interface IString {
  type: 'string';
  value: string;
}

interface StringProps {
  data: string
}

export const String: FC<StringProps> = ({ data }) => {
  return (
    <Wrapper>
      {data}
    </Wrapper>
  );
};