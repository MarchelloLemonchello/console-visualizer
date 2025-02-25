import React, {FC} from 'react';

import { Number } from "../Number";
import { String } from "../String";
import {TAny} from "../../model/propsTypes";


const listOfTypes = {
  string: String,
  number: Number,
}

interface AnalyzerProps {
  data: TAny
}

export const Analyzer: FC<AnalyzerProps> = ({ data}) => {
  return listOfTypes[data.type];
};