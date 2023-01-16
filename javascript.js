let resDisplay;
let num1 = 0;
let num2 = 0;
let signDisplay = 0;

const numbers = document.querySelectorAll('.numbers button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (signDisplay === 0){
            num1 = num1 + number.textContent;
            console.log(num1);
        } else {
            num2 = num2 + number.textContent;
            console.log(num2);
        }
    });
});

const signs = document.querySelectorAll('#operand');
signs.forEach((sign) => {
    sign.addEventListener('click', () => {
        signDisplay = sign.textContent;
        console.log(signDisplay);
    });
});

const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    operate(num1, signDisplay, num2);
});

const display = document.querySelector('p');
display.setAttribute("text", `${num1}`);

function add (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    a = parseInt(num1);
    b = parseInt(num2);
    operator = signDisplay;
    if (signDisplay === '+') {
        console.log(add(a, b));
    } else if (signDisplay === '-') {
        console.log(subtract(a, b));
    } else if (signDisplay === 'x') {
        console.log(multiply(a, b));
    } else {
        console.log(divide(a, b));
    }
}