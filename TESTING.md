# TESTING.md

## Testing Strategy

The testing strategy for Quick-Calc is focused on making sure that the calculator works correctly and that the user interface connects properly with the calculation logic.

Two types of testing were used in this project:

1. **Unit Testing** – to test each mathematical function separately.
2. **Integration Testing** – to check that clicking buttons in the interface correctly performs calculations and updates the display.

### What Was Tested

- All four arithmetic operations (addition, subtraction, multiplication, and division)
- Handling of division by zero
- Negative numbers
- Decimal numbers
- Large numbers
- Complete user interaction flow (for example: 5 + 3 = 8)
- Clear button behavior
- Decimal input behavior during user interaction

### What Was Not Tested

- CSS styling and visual appearance
- Performance under heavy usage
- Compatibility across different browsers
- Accessibility features

These areas were not tested because the main goal of this assignment is to verify functional correctness and proper logic implementation, not visual design or performance optimization.

---

### Lecture Concepts

### 1. The Testing Pyramid

The test suite follows the idea of the Testing Pyramid. Most of the tests are unit tests (8 in total), which are small and fast because they test individual functions separately. Only a few tests (3 integration tests) check how different parts of the application work together.

This matches the pyramid concept:
- A larger number of unit tests at the bottom
- A smaller number of integration tests above

---

### 2. Black-box vs White-box Testing

The unit tests use a white-box testing approach because they directly test the internal functions such as `add`, `subtract`, `multiply`, and `divide`. Since these tests access the actual implementation, they are considered white-box.

The integration tests use a black-box approach. They simulate how a user interacts with the calculator by clicking buttons and checking the display result. These tests do not depend on how the code is written internally, only on the visible behavior.

---

### 3. Functional vs Non-Functional Testing

The tests in this project focus on functional testing. This means they verify that the calculator produces the correct output for given inputs and handles special cases like division by zero.

Non-functional aspects such as performance, browser compatibility, visual layout, and usability were not tested because the main goal of this assignment is to verify correctness and logic, not UI design or performance optimization.

---

### 4. Regression Testing

The current test suite can also serve as regression testing. If changes are made to the calculator in the future, running `npm test` will quickly show whether any existing functionality has been broken.

This helps maintain stability and ensures that new updates do not accidentally introduce errors into previously working features.

---

## Test Results Summary

| Test Name | Type | Status |
|-----------|------|--------|
| Addition works correctly | Unit | Passed |
| Subtraction works correctly | Unit | Passed |
| Multiplication works correctly | Unit | Passed |
| Division works correctly | Unit | Passed |
| Division by zero handling | Unit | Passed |
| Negative number handling | Unit | Passed |
| Decimal number handling | Unit | Passed |
| Large number handling | Unit | Passed |
| 5 + 3 = 8 flow | Integration | Passed |
| Clear button resets display | Integration | Passed |
| Decimal interaction 2.5 + 1.5 = 4 | Integration | Passed |