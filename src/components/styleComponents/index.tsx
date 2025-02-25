import React, { FC, ReactNode } from "react";
import styled from 'styled-components';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = styled.div<WrapperProps>`
  color: green;
`


