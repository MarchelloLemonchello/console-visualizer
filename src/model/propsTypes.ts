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
export interface IUndefined {
  type: 'undefined';
  value: undefined;
}
export interface IBigint {
  type: 'bigint';
  value: string;
}
export interface IBoolean {
  type: 'boolean';
  value: boolean;
}
export interface INull {
  type: 'null';
  value: null;
}
export interface ISymbol {
  type: 'symbol';
  value: string;
}
export interface IMap {
  type: 'map';
  value: IMapItem[];
}

export interface IMapItem {
  type: 'mapItem';
  value: {
    key: TAny,
    value: TAny
  };
}

export type TAny = INumber | IString | IFunction | IObject | IArray | IUndefined | IBigint | IBoolean | INull | ISymbol | IMap | IMapItem;

export interface AnalyzerProps {
  data: TAny
  name?: string
  pre?: string
  post?: string
}

export type TNestedDataRenderer = (options: AnalyzerProps) => ReactNode
export type TTypeViewer = ComponentType<{ data: TAny['value'], renderNestedData: TNestedDataRenderer, type:  TAny['type']}>