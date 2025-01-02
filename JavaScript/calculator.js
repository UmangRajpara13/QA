// calculator.js

const { add, subtract, multiply, divide } = require("./arithmetic");

module.exports = class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result = add(this.result, value);
        return this.result;
    }

    subtract(value) {
        this.result = subtract(this.result, value);
        return this.result;
    }

    multiply(value) {
        this.result = multiply(this.result, value);
        return this.result;
    }

    divide(value) {
        this.result = divide(this.result, value);
        return this.result;
    }

    clear() {
        this.result = 0;
        return this.result;
    }
}




