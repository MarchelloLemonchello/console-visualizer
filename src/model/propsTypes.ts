import {ComponentType, ReactNode} from "react";

export interface INumber {
  type: 'number';
  value: number;
}
export interface IString {
  type: 'string';
  value: string;
}
export interface IFunction {
  type: 'function';
  value: string;
}
export interface IObject {
  type: 'object';
  value: Record<string | number, TAny>;
}
export interface IArray {
  type: 'array';
  value: TAny[];
}
export type TAny = INumber | IString | IFunction | IObject | IArray;

export interface AnalyzerProps {
  data: TAny
  name?: string
  pre?: string
  post?: string
}

export type TNestedDataRenderer = (options: AnalyzerProps) => ReactNode
export type TTypeViewer = ComponentType<{ data: TAny['value'], renderNestedData: TNestedDataRenderer }>