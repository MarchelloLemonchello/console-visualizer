import React from 'react';
import {Visualizer, VisualizerProps} from "../Visualizer";
import {Meta, StoryFn} from "@storybook/react";
export default {
  title: 'visualizer/array',
  component: Visualizer,
  args: {
    data: [{
      type: "map",
      value: [
        {
          type: "mapItem",
          value: {
            key: {
              type: "number",
              value: 1,
            },
            value: {
              type: "string",
              value: '1',
            }
          }
        }
      ]
    },
    {
      type: "array",
      value: [
        {
          type: "number",
          value: 1,
        },
        {
          type: "object",
          value: {
            bip: {
              type: "string",
              value: "text",
            }
          }
        }
      ]
    }, {
      type: "bigint",
      value: '9007199254740991n'
    }, {
      type: "object",
      value: {
        t: {
          type: "boolean",
          value: true
        },
        f: {
          type: "boolean",
          value: false
        }
      }
    }, {
      type: "undefined",
      value: undefined,
    },{
      type: "null",
      value: null,
    }
    ],
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