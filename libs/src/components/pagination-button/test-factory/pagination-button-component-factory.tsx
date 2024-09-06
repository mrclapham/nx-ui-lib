import * as Factory from 'factory.ts';

import { type PaginationButtonProps, HeadingSizes } from '../pagination-button-component';

export const PaginationButtonFactory =
  Factory.Sync.makeFactory<PaginationButtonProps>({
    size: HeadingSizes.LARGE,
    title: 'The Title',
    className: 'classname',
    ariaLabel: 'aria-label',
  });
