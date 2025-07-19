const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    stepDefinitions: ["cypress/e2e/api"],
    specPattern: 'cypress/e2e/api/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)]
      }));
      allureWriter(on, config);
      return config;
    },
    // specPattern: "cypress/e2e/api/*.feature",
    env: {
      BASE_URL: process.env.BASE_URL
    }
  }
});
