import React from 'react';
import {
  render,
  cleanup,
  act,
  waitFor,
} from '@testing-library/react';
import ThemeWrapper from 'theme/ThemeWrapper';
import Page from '..';

describe('<Page />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders <Page /> components', async () => {
    act(() => {
      render(
        <ThemeWrapper>
          <Page title="page title">Page</Page>
        </ThemeWrapper>,
      );
    });

    await waitFor(() => expect(document.title).toEqual('page title'));
  });
});
