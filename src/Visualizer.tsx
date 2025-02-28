import React, {FC} from "react";
import {TAny} from "./model/propsTypes";
import {Analyzer} from "./components/analyzer";
import styled from "styled-components";
import {DownLine} from "./components/styleComponents";

type TVariant = 'log' | 'info' | 'warn' | 'error' | undefined;

export interface VisualizerProps {
  data: TAny[]
  name?: string
  variant?: TVariant
}

const borderColorVariants = {
  log: '#2e2e2e',
  info: '#00b5bf',
  warn: '#f4970b',
  error: '#ec0000',
} as Record<TVariant, string>

const ConsoleState = styled.div<{ $variant: TVariant }>`
      padding: 12px;
      color: #f3fdeb;
      background: #2e2e2e;
      border-radius: 6px;
      border: 2px solid ${(props) => props.$variant ? borderColorVariants[props.$variant] : '#2e2e2e'};
  `

export const Visualizer: FC<VisualizerProps> = ({data, name, variant}) => {
  return (
    <ConsoleState $variant={variant}>
      {data.map((unoData , i) => (
        <DownLine key={i}>
          <Analyzer key={i} data={unoData} pre={name ? name + " = ": ''} post=" ;"/>
        </DownLine>
      ))}
    </ConsoleState>
  );
};

