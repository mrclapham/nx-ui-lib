/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FC } from 'react';
import styles from './pagination-button-component.module.css';

export const HeadingSizes = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type HeadingSizesType = (typeof HeadingSizes)[keyof typeof HeadingSizes];

export type PaginationButtonProps = {
  size?: HeadingSizesType;
  title: string;
  className?: string;
  ariaLabel?: string;
};

export const PaginationButton: FC<PaginationButtonProps> = ({
  size = HeadingSizes.LARGE,
  title,
  className = 'heading',
  ariaLabel,
}) => {
  const sizeClasses = {
    [HeadingSizes.LARGE]: 'text-3xl p-2',
    [HeadingSizes.MEDIUM]: 'text-2xl p-2',
    [HeadingSizes.SMALL]: 'text-xl p-2',
  };

  return (
    <div className={ styles['pagination-button']} aria-label={ariaLabel || title}>
      {title}
    </div>
  );
};
