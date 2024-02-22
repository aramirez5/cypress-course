const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const { promises: { readdir } } = require('fs')

const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const findBrowser = async () => {
  const browserPath =
    'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application'

  const version = (await getDirectories(browserPath))[0]

  const majorVersion = parseInt(version.split('.')[0])

  return {
    name: 'Brave',
    channel: 'stable',
    family: 'chromium',
    displayName: 'Brave',
    version,
    path: browserPath + '/brave.exe',
    majorVersion,
  }
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return findBrowser().then((browser) => {
        return {
          browsers: config.browsers.concat(browser),
        }
      })
    },
    defaultCommandTimeout: 5000,
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