// arithmetic.test.js

const { add, subtract, multiply, divide } = require("./arithmetic");

describe("Arithmetic Operations", () => {

    test("adds two numbers", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -1)).toBe(-2);
        expect(add(0, 0)).toBe(0);
    });

    test("subtracts two numbers", () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(-1, -1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });

    test("multiplies two numbers", () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-1, -1)).toBe(1);
        expect(multiply(0, 5)).toBe(0);
    });

    test("divides two numbers", () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(-6, -2)).toBe(3);

        // Testing division by zero
        expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
    });
});
