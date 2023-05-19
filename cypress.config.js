const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.{js,ts,feature}",
    chromeWebSecurity: false,
    experimentalStudio: true,
    reporter:'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "John"
    }
  },
});
