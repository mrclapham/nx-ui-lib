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
  size = HeadingSizes.MEDIUM,
  title,
  className = 'heading',
  ariaLabel,
}) => {
  const sizeClasses = {
    [HeadingSizes.LARGE]: 'pagination-button--large',
    [HeadingSizes.MEDIUM]: 'pagination-button--medium',
    [HeadingSizes.SMALL]: 'pagination-button--small',
  };

  return (
    <div className={ `${styles['pagination-button']} ${styles[sizeClasses[size]]}`} aria-label={ariaLabel || title}>
      {title} {size}
    </div>
  );
};
