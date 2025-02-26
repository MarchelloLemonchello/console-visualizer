import React, {FC} from "react";
import {TAny} from "./model/propsTypes";
import {Analyzer} from "./components/analyzer";
import styled from "styled-components";

type TVariant = 'log' | 'info' | 'warn' | 'error';

export interface VisualizerProps {
  data: TAny
  name?: string
  variant?: TVariant
}

const borderColorVariants = {
  log: '#2e2e2e',
  info: '#00b5bf',
  warn: '#f76b00',
  error: '#ec0000',
} as Record<TVariant, string>

export const Visualizer: FC<VisualizerProps> = ({data, name, variant}) => {

  const ConsoleState = styled.div`
      padding: 12px;
      color: #f3fdeb;
      background: #2e2e2e;
      border-radius: 6px;
      border: 2px solid ${variant ? borderColorVariants[variant] : '#2e2e2e'};
  `

  return (
    <ConsoleState>
       <Analyzer data={data} pre={name ? name + " = ": ''} post=" ;"/>
    </ConsoleState>
  );
};

