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
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "John"
    }
  },
});
