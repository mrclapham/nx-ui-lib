import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { PaginationButton } from './pagination-button-component';

describe('PaginationButton Component', () => {
  test('renders with default props', () => {
    render(<PaginationButton title='Default Heading' />);
    const headingElement = screen.getByText('Default Heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('renders with custom size', () => {
    render(<PaginationButton size='large' title='Large Heading' />);
    const headingElement = screen.getByText('Large Heading');
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('applies custom className', () => {
    render(<PaginationButton title='Custom Class' className='custom-class' />);
    const headingElement = screen.getByText('Custom Class');
    expect(headingElement).toHaveClass('custom-class');
  });

  test('sets aria-label attribute when provided', () => {
    render(
      <PaginationButton title='Aria Label Test' ariaLabel='Custom Label' />,
    );
    const headingElement = screen.getByText('Aria Label Test');
    expect(headingElement).toHaveAttribute('aria-label', 'Custom Label');
  });

  test('uses title as aria-label when ariaLabel is not provided', () => {
    render(<PaginationButton title='Default Aria Label' />);
    const headingElement = screen.getByText('Default Aria Label');
    expect(headingElement).toHaveAttribute('aria-label', 'Default Aria Label');
  });
});
