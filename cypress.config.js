const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const baseUrl = require('./baseUrl.js');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl,
    video: false,
    supportFile: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      on(
        'task',
        {
          log(message) {
            console.log(message)
            return null
          },
        }
      );

      // Overwrite the visit command globally to set the redirection limit
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security'); // Disable web security for cross-origin redirects
        }
        return launchOptions;
      });

      // Increase the redirection limit
      config.redirectionLimit = 300; // Set the maximum number of redirects
      return config;
    },
  },
});
