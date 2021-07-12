// purgecss.config.js

module.exports = {
  css: [
    'build/static/css/*.css',
  ],
  content: [
    'build/**/*.html',
    'build/static/js/*.js',
  ],
  output: 'build/static/css',
};
