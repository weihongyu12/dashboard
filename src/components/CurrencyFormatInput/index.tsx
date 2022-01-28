import React, { FC } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

type CurrencyFormatInputProps = {
  inputRef: (instance: NumberFormat<NumberFormatProps> | null) => void;
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
};

const CurrencyFormatInput: FC<CurrencyFormatInputProps> = function CurrencyFormatInput({
  inputRef,
  onChange,
  name,
  prefix = '',
  suffix = '',
  ...rest
}) {
  return (
    <NumberFormat
      /* eslint-disable-next-line react/jsx-props-no-spreading */
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
};

CurrencyFormatInput.defaultProps = {
  prefix: '',
  suffix: '',
};

export default CurrencyFormatInput;
