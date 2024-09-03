import type { Meta, StoryObj } from '@storybook/react';
import { VanillaUi } from './vanilla-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof VanillaUi> = {
  component: VanillaUi,
  title: 'VanillaUi',
};
export default meta;
type Story = StoryObj<typeof VanillaUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to VanillaUi!/gi)).toBeTruthy();
  },
};
