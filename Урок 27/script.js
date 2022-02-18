// function showMessage() {
//     let message = "Hello World";
//     alert(message);
// }
// showMessage();
// alert(message);

// function showMessage(from, text) {
//     alert(from + ": " + text);
// }
// showMessage("Miron", "Hello World");
// showMessage("Kesha", "dlroW olleH");

// function sum(x, y) {
//     return x + y;
// }
// alert(sum(2, Math.PI))

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("А тобi дiйсно можно?");
//     }
// }
// let age = prompt("Скiльки тобi рокiв?", 18);
// if (checkAge(age)) {
//     alert("Доступно");
// } else {
//     alert("Не Доступно")
// }

function pow(x, n) {
    for (let i = 1; i < n; i++) {
        x = x * x
    }
    return x;
}
// let x = prompt("Число", 5)
// let n = prompt("Степiнь", 2)
// alert(pow(x, n));

function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
alert(add(multiply(3,9), 10))