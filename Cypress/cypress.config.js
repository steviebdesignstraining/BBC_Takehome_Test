// cypress.config.js

// Change import statements to require statements
const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// This file is treated as a CommonJS Module.
// Cypress automatically loads .env files from the project root.
// Variables from .env are then available via process.env in Node.js context.

// Change export default to module.exports
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(
      on,
      config
    ) {
      await addCucumberPreprocessorPlugin(on, config);      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)], // <-- CORRECT WAY TO USE createEsbuildPlugin
        })      );

      // Optional: Log the resolved baseUrl and the raw environment variable for debugging.
      console.log('Cypress config.baseUrl (resolved):', config.baseUrl);
      console.log('Node process.env.BASE_URL (from .env):', process.env.BASE_URL);

      // It's essential to return the modified config object so Cypress uses the changes.
      return config;
    },

    // This pattern tells Cypress to look for .feature files recursively
    specPattern: "cypress/e2e/**/*.feature",

    // Set the base URL for your application.
    baseUrl: process.env.BASE_URL || "https://testapi.io/api/ottplatform/media",

    // If you have a support file (e.g., for custom commands), keep this line.
    // Otherwise, you can remove it.
    // supportFile: "cypress/support/e2e.js",

    // This 'env' block is specifically for configurations related to the
    // cypress-cucumber-preprocessor itself, such as defining where step
    // definition files are located.
    env: {
      "cypress-cucumber-preprocessor": {
        // Define an array of glob patterns where the preprocessor should look for
        // your step definition files (.js, .mjs, .ts, .tsx).
        // It's good practice to include all potential locations.
        stepDefinitions: [
          "cypress/e2e/step_definitions/*.js",      // For steps directly under e2e/step_definitions
          "cypress/e2e/**/step_definitions/*.js",  // For steps nested under feature-specific folders (e.g., e2e/api/step_definitions)
          "cypress/support/step_definitions/*.js",  // For global/shared step definitions in the support folder
          // Add any other specific paths if your step definitions are elsewhere
        ],
        omitFiltered: true,
        filterSpecs: true, // <-- FIXED: Added comma and moved comment
        // nonGlobalStepDefinitions: false, // Default is usually false, meaning steps are global
      },
    },
  },
});