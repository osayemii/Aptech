// let name = "Daniel";
// console.log(name);

// function greet() {
//     let message = "Hello World";
//     if (true) {
//         let message = "Hi";
//         console.log(message)
//     }
//     console.log(message)
// }

// function calcAge(yearOfBirth, currentYear) {
//     let Age = currentYear - yearOfBirth;
//     return Age;
// }
// greet();
// calcAge();

// console.log(calcAge(1990, 2023));
// console.log(calcAge(2000, 2023));\

// 

// Quadratic Equation

function quadratic(a, b, c) {
    let sqrt = Math.sqrt(b * b - 4 * a * c);
    if (isNaN(sqrt)) {
        return "No real roots";
    } else {
        let x1 = (-b + sqrt) / (2 * a);
        let x2 = (-b - sqrt) / (2 * a);
        return [x1, x2];
    }
}

console.log(quadratic(1, 5, 6));
console.log(quadratic(1, 3, 10));
console.log(quadratic(1, 5, 6));

// function interest(principal, rate, time) {
//     let interest = (principal * rate * time) / 100;
//     return interest;
// }


// console.log("Interst = " + interest(10000, 10, 3).toLocaleString());