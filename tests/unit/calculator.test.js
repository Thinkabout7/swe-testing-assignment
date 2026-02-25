import { add, subtract, multiply, divide } from "../../src/calculator.js";

describe("Quick-Calc Unit Tests", () => {

  test("adds two numbers correctly", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divides two numbers correctly", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("returns error when dividing by zero", () => {
    expect(divide(6, 0)).toBe("Cannot divide by zero");
  });

  test("handles negative numbers", () => {
    expect(add(-5, 2)).toBe(-3);
  });

  test("handles decimal numbers", () => {
    expect(add(2.5, 1.5)).toBe(4);
  });

  test("handles large numbers", () => {
    expect(multiply(1000000, 3)).toBe(3000000);
  });

});