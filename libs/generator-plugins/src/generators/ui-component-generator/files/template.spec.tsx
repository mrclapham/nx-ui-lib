import React from 'react';
import { render, screen } from '@testing-library/react';

import { <%= pascalName %> } from './<%= name %>'; 

describe('<%= camelName %> Component', () => {
  test('renders with default props', () => {
    render(<<%= pascalName %> title="Default Heading" />);
    const headingElement = screen.getByText('Default Heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('renders with custom size', () => {
    render(<<%= pascalName %> size="large" title="Large Heading" />);
    const headingElement = screen.getByText('Large Heading');
    expect(headingElement).toHaveClass('text-3xl');
  });

  test('applies custom className', () => {
    render(<<%= pascalName %> title="Custom Class" className="custom-class" />);
    const headingElement = screen.getByText('Custom Class');
    expect(headingElement).toHaveClass('custom-class');
  });

  test('sets aria-label attribute when provided', () => {
    render(<<%= pascalName %> title="Aria Label Test" ariaLabel="Custom Label" />);
    const headingElement = screen.getByText('Aria Label Test');
    expect(headingElement).toHaveAttribute('aria-label', 'Custom Label');
  });

  test('uses title as aria-label when ariaLabel is not provided', () => {
    render(<<%= pascalName %> title="Default Aria Label" />);
    const headingElement = screen.getByText('Default Aria Label');
    expect(headingElement).toHaveAttribute('aria-label', 'Default Aria Label');
  });
});