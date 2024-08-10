import { render } from '@testing-library/react';

import ReproLib from './repro-lib';

describe('ReproLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReproLib />);
    expect(baseElement).toBeTruthy();
  });
});
