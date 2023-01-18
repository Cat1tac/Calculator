let num1 = "";
let num2;
let signDisplay = "";

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
            if (num2 === undefined){
                num2 = 0;
            }
            num2 = num2 + number.textContent;
            console.log(num2);
        }
        updateScreen();
    });
});
//sign functionality
const signs = document.querySelectorAll('#operand');
signs.forEach((sign) => {
    sign.addEventListener('click', () => {
        if (num1 === "") {
            console.log("ERROR")
        } else {
            if (signDisplay !== "" && num2 !== undefined) {
                num1 = Math.round(operate(num1, signDisplay, num2)* 10000000000) / 10000000000;
                num2 = undefined;
            } 
            signDisplay = sign.textContent;
            console.log(signDisplay);
        }
        updateScreen();
    });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    num1 = Math.round(operate(num1, signDisplay, num2)* 10000000000) / 10000000000;
    num2 = undefined;
    signDisplay = "";
    updateScreen();
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    num1 = "";
    num2 = undefined;
    signDisplay = "";
    updateScreen();
});

function updateScreen() {
    const result = Math.round(operate(num1, signDisplay, num2)* 10000000000) / 10000000000;
    const textOperations = document.querySelector('#screenOp');
    if(num1 === ""){
        textOperations.textContent = "";
    } else if (num2 === undefined){
        textOperations.textContent = `${Number(num1)} ${signDisplay}`;
    } else {
        textOperations.textContent = `${Number(num1)} ${signDisplay} ${Number(num2)}`;
    }
    const textResult = document.querySelector('#screenRes');
    if (result === undefined || num2 === undefined){
        textResult.textContent = "";
    } else if (result === Infinity){
        textResult.textContent = "lol";
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

