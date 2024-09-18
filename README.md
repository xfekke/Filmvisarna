# Filmvisarna

Filmvisarna is a group project focused on testing a cinema booking website using the **Cypress.io** framework. This project incorporates behavior-driven development (BDD) with Cucumber, offering an intuitive and flexible testing environment.

## Project Overview

- **Project Name**: Filmvisarna
- **Website**: [Filmvisarna Cinema Booking](https://filmvisarna-team2.nodehill.se/)
- **Framework**: Cypress with Cucumber Preprocessor

The primary goal is to test the cinema booking website, ensuring its functionality and reliability. Cypress is used for end-to-end testing, while the Cucumber preprocessor enables the use of Gherkin syntax for writing clear, human-readable test scenarios.

## Key Features

- **Cypress Testing Framework**: Tests can be run both in interactive mode (`cypress open --browser chrome`) and headless mode (`cypress run --browser chrome`).
- **Cucumber Preprocessor**: BDD is integrated using the Cucumber preprocessor, allowing test cases to be written in Gherkin, making test scenarios easy to understand.
- **Automatic Step Definition Generation**: A custom script, `_auto-generate-step-definitions.js`, is included to automatically generate step definitions from the Gherkin test scenarios.

## Project Structure

- **package.json**: Contains the project's dependencies and test scripts.
- **cypress/**: The directory where Cypress test files and configurations are stored.
- **specs/**: Contains test specifications, including step definitions for the BDD tests.
- **rapport.md**: Likely a project report documenting test results or coverage.

## Installation

To install the required dependencies, run:
```
npm install
```

## Running Tests

### Interactive Mode (Development & Debugging)
To run tests interactively, use:
```
npm run test-ui
```

### Headless Mode (CI & Batch Testing)
For running tests in headless mode, use:
```
npm run test
```

## Generating Step Definitions

To automatically generate step definitions, run:
```
npm run make-steps
```

## Conclusion

Filmvisarna provides a robust framework for testing a cinema booking website, leveraging the power of Cypress for seamless end-to-end testing. With BDD integration through Cucumber, this project enhances test readability and automates step definition generation, offering a flexible testing solution for both development and continuous integration.