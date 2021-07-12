module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
    },
    collect: {
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    upload: {
      'target': 'temporary-public-storage',
    },
  },
};
