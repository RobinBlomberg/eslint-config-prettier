const { defineConfig } = require('npm-check-updates');

module.exports = defineConfig({
  target: (name) =>
    ['eslint', 'typescript'].includes(name) ? 'minor' : 'latest',
});
