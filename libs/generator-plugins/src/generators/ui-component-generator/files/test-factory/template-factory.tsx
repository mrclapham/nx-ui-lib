import * as Factory from 'factory.ts';

import {
  type <%= pascalName %>Props,
  HeadingSizes
} from '../<%= name %>';

export const <%= camelName %>Factory = Factory.Sync.makeFactory<<%= pascalName %>Props>({
  size: HeadingSizes.LARGE,
  title: 'The Title',
  className: 'classname',
  ariaLabel: 'aria-label',
});
