import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextField } from '@material-ui/core';
import ThemeWrapper from 'theme/ThemeWrapper';
import CurrencyFormatInput from '..';

describe('<CurrencyFormatInput />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders <CurrencyFormatInput /> props prefix', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <TextField
          value="1000"
          label="prefix"
          variant="outlined"
          InputProps={{
            inputComponent: CurrencyFormatInput as any,
            inputProps: {
              prefix: '¥',
            },
          }}
        />
      </ThemeWrapper>,
    );
    expect(getByTestId('CurrencyFormatInput'))
      .toHaveValue('¥1,000');
  });

  it('renders <CurrencyFormatInput /> props suffix', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <TextField
          value="1000"
          label="suffix"
          variant="outlined"
          InputProps={{
            inputComponent: CurrencyFormatInput as any,
            inputProps: {
              suffix: '元',
            },
          }}
        />
      </ThemeWrapper>,
    );
    expect(getByTestId('CurrencyFormatInput'))
      .toHaveValue('1,000元');
  });

  it('renders <CurrencyFormatInput /> decimalScale', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <TextField
          value="1.000"
          label="prefix"
          variant="outlined"
          InputProps={{
            inputComponent: CurrencyFormatInput as any,
          }}
        />
      </ThemeWrapper>,
    );
    expect(getByTestId('CurrencyFormatInput'))
      .toHaveValue('1.00');
  });
});
