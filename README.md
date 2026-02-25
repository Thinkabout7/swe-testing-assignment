# swe-testing-assignment
# Quick-Calc

Quick-Calc is a simple web-based calculator application built using JavaScript.  
It supports basic arithmetic operations and includes automated unit and integration tests.

## Features
- Addition
- Subtraction
- Multiplication
- Division
- Division by zero handling
- Decimal number support
- Delete button
- Clear (C) button

---

## Setup Instructions
1. Clone the repository:
   git clone https://github.com/Thinkabout7/swe-testing-assignment.git

2. Navigate into the project folder:
   cd swe-testing-assignment

3. Install dependencies:
   npm install

---

## Running the Application
Open:

public/index.html

in your browser.

---

## Running Tests

To execute all tests:
npm test

This will run:
- 8 unit tests
- 3 integration tests

---

## Testing Framework Research

Before selecting a testing framework, two popular JavaScript options were considered: **Jest** and **Mocha**.

| Aspect | Jest | Mocha |
|--------|------|--------|
| Setup | Minimal configuration, works out of the box | Requires additional setup |
| Assertions | Built-in assertion library | Needs external library (e.g., Chai) |
| Mocking | Built-in mocking support | Requires additional packages |
| Configuration | Simple and beginner-friendly | Flexible but more configuration required |

Jest provides an all-in-one solution that includes a test runner, assertion library, and mocking capabilities without extra dependencies. This makes it efficient and straightforward to use, especially for small to medium-sized projects.

Mocha is a flexible testing framework that allows developers to choose their own assertion and mocking libraries. While this provides greater customization, it also increases setup complexity.

For this project, **Jest was selected** due to its simplicity, integrated features, and ease of configuration.