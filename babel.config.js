module.exports = {
  presets: [
    ['react-app'],
  ],
  plugins: [
    'babel-plugin-date-fns',
    [
      'babel-plugin-lodash',
      {
        id: [
          'lodash',
          'async-es',
        ],
      },
    ],
    [
      'babel-plugin-direct-import',
      {
        modules: [
          '@mui/material',
          '@mui/icons-material',
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        [
          'babel-plugin-react-remove-properties',
          {
            properties: [
              'data-testid',
              /data-test$/
            ]
          },
        ],
      ],
    },
  },
};
