// nightwatch.conf.js

const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')

module.exports = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',
  page_objects_path: 'tests/e2e/page-objects',
  custom_assertions_path: 'tests/e2e/custom-assertions',
  custom_commands_path: 'tests/e2e/custom-commands',
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: chromedriver.path
  },
  test_workers: false,
  test_settings: {
    default: {
      detailed_output: true,
      launch_url: 'http://localhost:3000'
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: [
            'no-sandbox',
            // 'headless'
          ]
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '--headless'
            ]
          }
        }
      },
      webdriver: {
        server_path: geckodriver.path,
        port: 4444
      }
    }
  }
};
