// styleguide.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./config/webpack.config');

const webpackEnv = process.env.NODE_ENV;
const isEnvDevelopment = webpackEnv === 'development';

module.exports = {
  webpackConfig: isEnvDevelopment ?
    webpackConfig :
    Object.assign({}, webpackConfig('production'), {
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      ],
    }),
  components: 'src/components/*/*.{jsx,tsx}',
  usageMode: 'expand',
  exampleMode: 'expand',
  defaultExample: false,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper'),
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      shouldRemoveUndefinedFromOptional: true,
    },
  ).parse,
};
