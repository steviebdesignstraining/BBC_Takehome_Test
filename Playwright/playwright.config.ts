import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./Playwright/features", // path to your .feature files
  reporter: [["allure-playwright"]],
  timeout: 30000,
});
