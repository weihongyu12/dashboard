/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

interface CurrencyFormatInputProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  /**
   * 格式化前缀
   */
  prefix?: string;
  /**
   * 格式化后缀
   */
  suffix?: string;
}

const CurrencyFormatInput: FC<CurrencyFormatInputProps> = ({
  inputRef,
  onChange,
  name,
  prefix = '',
  suffix = '',
  ...rest
}) => (
  <NumberFormat
    {...rest}
    getInputRef={inputRef}
    onValueChange={(values) => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      });
    }}
    thousandSeparator
    isNumericString
    prefix={prefix}
    suffix={suffix}
    decimalScale={2}
    data-testid="CurrencyFormatInput"
  />
);

export default CurrencyFormatInput;
