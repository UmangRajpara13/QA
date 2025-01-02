// calculator.test.js

const Calculator = require("./calculator");

describe("Calculator Integration Tests", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test("should add numbers correctly", () => {
        expect(calculator.add(5)).toBe(5);
        expect(calculator.add(10)).toBe(15);
        expect(calculator.add(-5)).toBe(10);
    });

    test("should subtract numbers correctly", () => {
        calculator.add(20); // Start with 20
        expect(calculator.subtract(5)).toBe(15);
        expect(calculator.subtract(10)).toBe(5);
        expect(calculator.subtract(-5)).toBe(10);
    });

    test("should multiply numbers correctly", () => {
        calculator.add(2); // Start with 2
        expect(calculator.multiply(3)).toBe(6);
        expect(calculator.multiply(0)).toBe(0);
        expect(calculator.multiply(-2)).toBe(0); // Multiplying by zero
    });

    test("should divide numbers correctly", () => {
        calculator.add(10); // Start with 10
        expect(calculator.divide(2)).toBe(5);

        // Testing division by zero
        expect(() => calculator.divide(0)).toThrow("Cannot divide by zero");

        // Continue dividing
        calculator.add(10); // Reset to 10
        expect(calculator.divide(5)).toBe(3);
    });

    test("should clear the result", () => {
        calculator.add(50);
        expect(calculator.clear()).toBe(0);
        expect(calculator.add(10)).toBe(10); // After clearing, should start fresh
    });
});
