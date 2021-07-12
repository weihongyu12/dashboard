import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ThemeWrapper from 'theme/ThemeWrapper';
import Label from '..';

describe('<Label />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders <Label /> components', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label>label</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label'))
      .toHaveTextContent('label');
  });

  it('renders <Label /> props shape \'rounded\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label shape="rounded">rounded</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label').className)
      .toMatch(/makeStyles-rounded/);
  });

  it('renders <Label /> props shape \'square\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label shape="square">rounded</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label').className)
      .not
      .toMatch(/makeStyles-rounded/);
  });

  it('renders <Label /> props variant \'contained\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label variant="contained">contained</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label'))
      .toHaveStyle({
        backgroundColor: '#757575',
        color: '#fff',
      });
  });

  it('renders <Label /> props variant \'outlined\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label variant="outlined">outlined</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label'))
      .toHaveStyle({
        border: '1px solid #757575',
        color: '#757575',
      });
  });

  it('renders <Label /> props color of variant \'contained\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label variant="contained" color="#2196f3">blue contained</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label'))
      .toHaveStyle({
        backgroundColor: '#2196f3',
        color: '#fff',
      });
  });

  it('renders <Label /> props color of variant \'outlined\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Label variant="outlined" color="#2196f3">blue outlined</Label>
      </ThemeWrapper>,
    );
    expect(getByTestId('label'))
      .toHaveStyle({
        border: '1px solid #2196f3',
        color: '#2196f3',
      });
  });
});
