function add(first,second){
    return first + second;
}

function subtract(first,second){
    return first - second;
}

function divide(first,second){
    return first / second;
}

function multiply(first,second){
    return first * second;
}

function operate(operator, first, second){
    switch (operator){
        case '+':
            add(first, second);
            break;
        case '-':
            subtract(first,second);
            break;
        case '/':
            divide(first, second);
            break;
        case '*':
            multiply(first,second);
            break;
    }

}

let firstNum = 0;

let operator = '+';

let secondNum = 0;

let currDecimal = false;

const currNum = document.querySelector('.screen-current');

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(num => num.addEventListener('click', addNum));

function addNum(e){
    if (e.target.innerText === '.') {
        if (currDecimal === false){
            currNum.innerText += e.target.innerText;
            currDecimal = true;
        }
    }
    else {
        if (currNum.innerText !== '0'){
            currNum.innerText += e.target.innerText;
        }
        else {
            currNum.innerText = e.target.innerText;
        }
    }
    
}