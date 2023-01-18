let num1 = "";
let num2 = "";
let signDisplay = "";
const screenDisplay = document.querySelector('.screen');

//Numpad functionality
const numbers = document.querySelectorAll('.numbers button');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (signDisplay === ""){
            if (num1 === ""){
                num1 = 0;
            }
            num1 = num1 + number.textContent;
            console.log(num1);
        } else {
            if (num2 === ""){
                num2 = 0;
            }
            num2 = num2 + number.textContent;
            console.log(num2);
        }
        updateScreen();
    });
});

const signs = document.querySelectorAll('#operand');
signs.forEach((sign) => {
    sign.addEventListener('click', () => {
        if (num1 === "") {
            console.log("ERROR")
        } else {
            if (signDisplay !== "" && num2 !== "") {
                num1 = operate(num1, signDisplay, num2);
                num2 = "";
            } 
            signDisplay = sign.textContent;
            console.log(signDisplay);
        }
        updateScreen();
    });
});

const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    num1 = operate(num1, signDisplay, num2);
    num2 = "";
    signDisplay = "";
    updateScreen();
});

function updateScreen() {
    const result = operate(num1, signDisplay, num2);
    const textOperations = document.querySelector('#screenOp');
    if (num2 === ""){
        textOperations.textContent = `${Number(num1)} ${signDisplay}`;
    } else {
        textOperations.textContent = `${Number(num1)} ${signDisplay} ${Number(num2)}`;
    }
    const textResult = document.querySelector('#screenRes');
    if (result === undefined || result === Infinity || num2 === ""){
        textResult.textContent = "";
    } else {
        textResult.textContent = `${result}`;
    }
    
}

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
    a = (typeof num1 === "string") ? Number(num1) : num1;
    b = Number(num2);
    operator = signDisplay;
    if (signDisplay === '+') {
        console.log(add(a, b));
        return add(a, b);
    } else if (signDisplay === '-') {
        console.log(subtract(a, b));
        return subtract(a, b);
    } else if (signDisplay === 'x') {
        console.log(multiply(a, b));
        return multiply(a, b);
    } else {
        if (num2 !== "") {
            console.log(divide(a, b));
            return divide(a, b);
        }
    }
}

