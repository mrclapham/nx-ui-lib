import { render } from '@testing-library/react';

import VanillaUi from './vanilla-ui';
import React from 'react';

describe('VanillaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanillaUi />);
    expect(baseElement).toBeTruthy();
  });
});
