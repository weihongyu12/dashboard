type FormatCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions,
  locales?: string | string[],
) => string;

// 默认设置
const defaultOptions = {
  style: 'currency',
  currency: 'CNY',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 2,
};

/**
 * 格式化货币
 * @param {number} value - 格式化的数值
 * @param {Object} [options={}] - `Intl.NumberFormat` 选项
 * @param {string|string[]} [locales='zh-Hans-CN'] - 缩写语言代码 （BCP 47 language tag）
 * @return string
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
const formatCurrency: FormatCurrency = function formatCurrency(value, options = {}, locales = 'zh-Hans-CN') {
  return new Intl.NumberFormat(locales, {
    ...defaultOptions,
    ...options,
  }).format(value);
};

export default formatCurrency;
