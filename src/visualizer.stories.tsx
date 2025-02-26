import React from 'react';
import {Visualizer, VisualizerProps} from "./Visualizer";
import {Meta, StoryFn} from "@storybook/react";

export default {
  title: 'Visualizer',
  component: Visualizer,
  args: {
    name: 'bipki',
    data: {
      type: "object",
      value: {
        a: {
          type: "number",
          value: 1,
        }
      }
    },
    variant: 'warn'
  } ,
} as Meta<VisualizerProps>;

export const VisualizerStoryTemplate: StoryFn<VisualizerProps> = ({...args}) =>
  <Visualizer {...args} />


VisualizerStoryTemplate.storyName = 'Visualizer';