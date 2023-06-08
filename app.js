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
            return add(first, second);
            break;
        case '-':
            return subtract(first,second);
            break;
        case '÷':
            return divide(first, second);
            break;
        case 'x':
            return multiply(first,second);
            break;
    }

}

let prevNum = 0;
let operator = '+';
let currNum = 0;

let currDecimal = false;
let choseOp = false;

const screenCurrNum = document.querySelector('.screen-current');
const screenPrevNum = document.querySelector('.screen-prev');
const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equals);

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(num => num.addEventListener('click', addNum));

const operators = document.querySelectorAll('[data-operator]');
operators.forEach(op => op.addEventListener('click', chooseOperator));

function equals(e){
    if (choseOp === true){
        currNum = Number(screenCurrNum.innerText);
        prevNum = operate(operator,prevNum, currNum);
        screenCurrNum.innerText = prevNum;
        currNum = 0;
        choseOp = false;
    }

}

function addNum(e){
    if (e.target.innerText === '.') {
        if (currDecimal === false){
            screenCurrNum.innerText += e.target.innerText;
            currDecimal = true;
        }
    }
    else {
        if (screenCurrNum.innerText !== '0'){
            if (currNum === 0){
                screenCurrNum.innerText = e.target.innerText;
                screenPrevNum.innerText = '';
                prevNum = 0;
            }
            else {
                screenCurrNum.innerText += e.target.innerText;
            }
        }
        else {
            screenCurrNum.innerText = e.target.innerText;
        }
        currNum = Number(screenCurrNum.innerText);
    }
    
}

function chooseOperator(e){
    if (choseOp === false){
        prevNum = Number(screenCurrNum.innerText);
        currDecimal = false;
        screenPrevNum.innerText = prevNum;
        console.log(prevNum);
        screenCurrNum.innerText = '0'
        choseOp = true;
    }
    else {
        equals(e);
        chooseOperator(e);
    }
    operator = e.target.innerText;
    
}