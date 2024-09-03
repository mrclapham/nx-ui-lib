import { render } from '@testing-library/react';

import VanillaUi from './vanilla-ui';

describe('VanillaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VanillaUi />);
    expect(baseElement).toBeTruthy();
  });
});
