import { type Meta, type StoryObj } from '@storybook/react';

import { <%= pascalName %>, HeadingSizes } from './<%= name %>';
import { <%= camelName %>Factory } from './test-factory/<%= name %>-factory';

const meta: Meta<typeof <%= pascalName %>> = {
  component: <%= pascalName %>,
    title: 'Components/<%= componentType %>/<%= camelName %>',
    tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(HeadingSizes),
    },
    title: { control: 'text' },
    className: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof <%= pascalName %>>;

export const Large: Story = {
  args: <%= camelName %>Factory .build({ 
    size: HeadingSizes.LARGE,
    title: '<%= pascalName %> – Large',
  }),
};

export const Medium: Story = {
  args: <%= camelName %>Factory .build({ 
    size: HeadingSizes.MEDIUM,
    title: '<%= pascalName %> – Medium',
  }),
};

export const Small: Story = {
  args: <%= camelName %>Factory .build({ 
    size: HeadingSizes.SMALL,
    title: '<%= pascalName %> – Small',
  }),
};