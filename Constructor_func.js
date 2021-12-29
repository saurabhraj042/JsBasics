/**
 * Problem Statement :
 * Create a constructor function Calculator that creates objects with 3 methods:

        read() asks for two values using prompt and remembers them in object properties.
        sum() returns the sum of these properties.
        mul() returns the multiplication product of these properties.
 */

function Calculator() {
    this.read = () => {
        this.a = +prompt('a =', 0);
        this.b = +prompt('b =', 0);
    };

    this.sum = () => {
        this.resultSum = this.a + this.b;
    };

    this.mul = () => {
        this.resultMul = this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();

console.log("Sum=" + calculator.resultSum);
console.log("Mul=" + calculator.resultMul);