class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }

    multiply(other) {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(real, imaginary);
    }

    print() {
        if (this.imaginary >= 0) {
            return `${this.real} + ${this.imaginary}i`;
        } else {
            return `${this.real} - ${Math.abs(this.imaginary)}i`;
        }
    }
}

function add() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    const num1 = new ComplexNumber(real1, imaginary1);
    const num2 = new ComplexNumber(real2, imaginary2);
    const sum = num1.add(num2);

    document.getElementById("result").innerText = "Sum: " + sum.print();
}

function subtract() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    const num1 = new ComplexNumber(real1, imaginary1);
    const num2 = new ComplexNumber(real2, imaginary2);
    const difference = num1.subtract(num2);

    document.getElementById("result").innerText = "Difference: " + difference.print();
}

function multiply() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    const num1 = new ComplexNumber(real1, imaginary1);
    const num2 = new ComplexNumber(real2, imaginary2);
    const product = num1.multiply(num2);

    document.getElementById("result").innerText = "Product: " + product.print();
}
