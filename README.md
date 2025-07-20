# 🚀 Stephen Bennett's QA Automation Project

[](https://github.com/steviebdesignstraining/waracle_takehome_Test/actions/workflows/main.yml/badge.svg)

## 👋 Introduction

![Stephen_.png](https://github.com/steviebdesignstraining/waracle_takehome_Test/raw/main/Stephen_.png)

Hi there\! Before we blast off into the code-verse, I want to introduce myself. My name is **Stephen Bennett**, and I've been immersed in the world of testing for over **12 years**. I genuinely enjoy the development space and bringing a positive, optimistic, and adaptable spirit to any team. I'm sociable and thrive in diverse environments, working well with all personalities.

First off, I absolutely **loved** completing this take-home test\! I got a bit carried away and ended up building **two** automation frameworks: one with **Cypress**, **Playwright** and **Postman**. 

Let's dive into what I've accomplished\!

-----

## 🎯 Project Overview

This project showcases a list of music tracks and metadata. There are 14 such tracks present in the response. Each music track contains various data elements like type, id, title_list etc. The primary goal is to **automate the following test scenarios for the given endpoint.

### 🔍 Scope of Automation

My automated tests cover positive and negative scenarios with Cucumber so that the test scripts define and explain what each test case is performing and to prevent repeated code:


The tests are meticulously implemented using both **Cypress** and **Playwright with Cucumber**, adhering to best practices in automation and QA. 

🔗 **BBC Take home Test**: [[https://testapi.io/api/ottplatform/media]]

-----

## 📋 Manual Test Plan

As mentioned, I've created a detailed **manual test plan** that outlines the key user flows, cases, and scenarios that have been automated. This plan ensures that all critical functionalities of the online shop are thoroughly tested and serves as a blueprint for the automated scripts.

📖 **View the Test Plan**: [(https://www.notion.so/BBC-Take-home-Test-23040221abc08042b058ed7265eeb1c8?source=copy_link))

-----

## 🛠️ Setup Instructions

Getting these frameworks up and running is straightforward. Please ensure you are in the correct directory for either Cypress or Playwright when executing commands.

1.  **Clone the repository**:

    ```bash
    [git clone https://github.com/steviebdesignstraining/BBC_Takehome_Test.git]
    ```

2.  **Navigate to the framework directory**:

    ```bash | Cypress
    cd BBC_Takehome_Test/Cypress
    ```

    ```bash | Playwright
    cd BBC_Takehome_Test/Postman
    ```

3.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running Tests

Choose your preferred framework and execution method:

| Command                             | Description                                             |
| :------------------------           | :------------------------------------------------------ |
| `npx cucumber-js --format progress` |             **RUn Playwright in termindal**             |
| `npm run cypress:runner`            | **Open Cypress GUI** for interactive test development.  |
| `npm run cypress:execution`         |        **Run Cypress** tests in headless mode.          |
| `npm run test:allure`               |  **Generate & Serve Allure Report** (for Playwrigh t).  |

-----

### CI/CD Pipeline and Report Dashboard
```To access the CI/CD pipeline and to review the allure report via GHP please click on the below link
https://steviebdesignstraining.github.io/BBC_Takehome_Test/#suites/37c1faf7af4bb8d0a97790b686f31a64/38a8ae7463f2226/
https://github.com/steviebdesignstraining/BBC_Takehome_Test/actions
```

## ✨ Features & Best Practices

Complete

  * **TypeScript Support**: Full TypeScript implementation with robust type checking.
  * **Page Object Model (POM)**: A maintainable and scalable test architecture.
  * **Fixtures**: Efficient test data management using JSON fixtures.
  * **Environment Configuration**: Flexible test environments via `.env` files.
  * **Custom Commands**: Reusable Cypress commands for common actions.
  * **Fake Data Generation**: Utilizes `@faker-js/faker` for dynamic test data.
  * **Multiple Test Scenarios**: Comprehensive coverage including login, cart operations, checkout, and error handling.
  * **Cross-browser Testing**: Support for Chrome, Firefox, and Edge browsers.
  * **Retry Logic**: Automatic test retries for improved reliability.
  * **Allure Reports**: Detailed and interactive test reports for Playwright.

-----

1.  **Page Object Model**: For a highly maintainable and scalable test structure.
2.  **TypeScript**: Ensures type safety and provides a superior developer experience.
3.  **Fixtures**: Centralizes and manages test data effectively.
4.  **Custom Commands/Helpers**: Promotes reusability and reduces code duplication.
5.  **Environment Configuration**: Offers flexibility for different testing environments.
6.  **Comprehensive Error Handling**: Robust management of test failures.
7.  **Performance Testing**: Includes critical page load time validation.
8.  **Cross-browser Testing**: Ensures broad compatibility.
9.  **Retry Logic**: Enhances test reliability by mitigating flakiness.
10. **Thorough Documentation**: Provides clear setup and usage guides.

-----
### Troubleshooting Steps:

For any issues or questions during execution:

1.  Always **check the test execution videos and screenshots** first.
2.  **Review the console output** for detailed error messages.
3.  **Validate your environment configuration** in the `.env` file.
4.  **Ensure all dependencies are properly installed** (`npm install`).

-----

