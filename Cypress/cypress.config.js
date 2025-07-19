import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
// import '@shelex/cypress-allure-plugin';
export default defineConfig({
  e2e: {
    // specPattern: "cypress/e2e/*.feature",
    // stepDefinitions: "cypress/e2e/step_definitions/*.js",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    // 🔽 This tells the plugin where to look for step definitions
    env: { // This 'env' block is specifically for cypress-cucumber-preprocessor settings
      "cypress-cucumber-preprocessor": {
        stepDefinitions: [
          "cypress/e2e/step_definitions/*.js", // This path
          "cypress/e2e/*.feature",              // Or a broader glob
          // "cypress/support/step_definitions/*.js", // Include support folder
          // Add any other custom paths where your step definitions reside
        ],
        baseUrl: process.env.BASE_URL || "https://testapi.io/api/ottplatform/media",

        // nonGlobalStepDefinitions: true, // You might need this depending on your structure
      },
    },
  },
});
