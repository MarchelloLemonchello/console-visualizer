import React from 'react';
import {Visualizer, VisualizerProps} from "../Visualizer";
import {Meta, StoryFn} from "@storybook/react";

export default {
  title: 'visualizer/array',
  component: Visualizer,
  args: {
    name: 'arr',
    data: {
      type: "array",
      value: [
        {
          type: "number",
          value: 1,
        },
        {
          type: "string",
          value: "text",
        },
      ]
    },
    variant: 'log'
  } ,
  argTypes: {
    variant: {
      options: ['log', 'info', 'warn', 'error'],
      control: { type: 'select' },
    },
  }
} as Meta<VisualizerProps>;

export const VisualizerObjectStoryTemplate: StoryFn<VisualizerProps> = ({...args}) =>
  <Visualizer {...args} />


VisualizerObjectStoryTemplate.storyName = 'Visualizer';