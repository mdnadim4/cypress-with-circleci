const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sex6o1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    "chromeWebSecurity": false,
    "pageLoadTimeOut": 120000,
  },
});
