const { defineConfig } = require('npm-check-updates');

module.exports = defineConfig({
  target: (name) => (name === 'eslint' ? 'minor' : 'latest')
});
