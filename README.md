# QA Testing Repository 🚀

Welcome to the QA Testing Repository! This project showcases various testing implementations in both JavaScript and Python. The repository is organized into two main folders: `JavaScript` and `Python`, each containing examples of different types of tests.

## Table of Contents 📚

- [Overview](#overview)
- [JavaScript Testing](#javascript-testing)
  - [Unit Testing](#unit-testing)
  - [Integration Testing](#integration-testing)
  - [Selenium Testing](#selenium-testing)
  - [Running Tests](#running-tests)
- [Python Testing](#python-testing)
  - [Unit Testing](#unit-testing-1)
  - [Setting Up a Virtual Environment](#setting-up-a-virtual-environment)
  - [Running Tests](#running-tests-1)
- [License](#license)

## Overview 🌟

This repository demonstrates practical implementations of testing methodologies commonly used in software development. It includes examples of unit tests, integration tests, and end-to-end tests using Selenium for JavaScript, as well as unit tests for Python.

## JavaScript Testing 🖥️

The `JavaScript` folder contains examples of three types of testing implemented using **Jest**:

### Unit Testing

- **Description**: Unit tests verify the functionality of individual components or functions in isolation.
- **Implementation**: Check out the `arithmetic.test.js` file for a demonstration of unit tests.

### Integration Testing

- **Description**: Integration tests ensure that different modules or services work together correctly.
- **Implementation**: See the `calculator.test.js` file for integration test examples.

### Selenium Testing

- **Description**: Selenium testing automates web applications for testing purposes.
- **Implementation**: Review the `selenium.test.js` file for an example of Selenium testing.

### Running Tests

To run the JavaScript tests, run the following:  

```  
cd JavaScript  
npm install  
npm test  
```

## Python Testing 🐍

The `Python` folder contains an example of unit testing implemented using the built-in `unittest` framework.

### Unit Testing

- **Description**: Unit tests in Python are designed to test individual units of code in isolation.
- **Implementation**: Check out the `test_calculator.py` file for a demonstration of unit tests in Python.

### Setting Up a Virtual Environment

To run the Python tests, run the following:  
```
cd Python
python -m venv myenv
```

Activate the virtual environment:
- On Windows:
  ```
  myenv\Scripts\activate
  ```
- On macOS/Linux:
  ```
  source myenv/bin/activate
  ```

### Running Tests

    python -m unittest test_calculator.py

## License 📄

This project is licensed under the MIT License. See the LICENSE file for details.
