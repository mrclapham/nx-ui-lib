import { type Meta, type StoryObj } from '@storybook/react';

import { PaginationButton, HeadingSizes } from './pagination-button-component';
import { PaginationButtonFactory } from './test-factory/pagination-button-component-factory';

const meta: Meta<typeof PaginationButton> = {
  component: PaginationButton,
  title: 'Components/atoms/paginationButtonComponent',
  tags: ['autodocs'],
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
type Story = StoryObj<typeof PaginationButton>;

export const Large: Story = {
  args: PaginationButtonFactory.build({
    size: HeadingSizes.LARGE,
    title: 'PaginationButton – Large',
  }),
};

export const Medium: Story = {
  args: PaginationButtonFactory.build({
    size: HeadingSizes.MEDIUM,
    title: 'PaginationButton – Medium',
  }),
};

export const Small: Story = {
  args: PaginationButtonFactory.build({
    size: HeadingSizes.SMALL,
    title: 'PaginationButton – Small',
  }),
};
