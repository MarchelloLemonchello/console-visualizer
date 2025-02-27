import React from 'react';
import {Visualizer, VisualizerProps} from "../Visualizer";
import {Meta, StoryFn} from "@storybook/react";

export default {
  title: 'visualizer/object',
  component: Visualizer,
  args: {
    data: [{
      type: "object",
      value: {
        num: {
          type: "number",
          value: 1,
        },
        str: {
          type: "string",
          value: "text",
        }
      }
    }, {
      type: "string",
      value: "text",
    }],
    variant: 'warn'
  } ,
  argTypes: {
    variant: {
      options: ['log', 'info', 'warn', 'error'],
      control: { type: 'select' },
    },
  }
} as Meta<VisualizerProps>;

export const VisualizerArrayStoryTemplate: StoryFn<VisualizerProps> = ({...args}) =>
  <Visualizer {...args} />


VisualizerArrayStoryTemplate.storyName = 'Visualizer';