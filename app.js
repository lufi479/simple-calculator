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

function allClear(e){
    prevNum = 0;
    currNum = 0;
    choseOp = false;
    operator = '+';
    screenPrevNum.innerText = '';
    clear(e);
}

function clear(e){
    screenCurrNum.innerText = '0';
    currDecimal = false;
}

function changeSign(e){
    if (screenCurrNum.innerText !== '0'){
        if (screenCurrNum.innerText.charAt(0) === '-'){
            screenCurrNum.innerText = screenCurrNum.innerText.substring(1);
        }
        else {
            screenCurrNum.innerText = '-' + screenCurrNum.innerText;
        }
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

function equals(e){
    if (choseOp === true){
        currNum = Number(screenCurrNum.innerText);
        prevNum = operate(operator,prevNum, currNum);
        screenCurrNum.innerText = prevNum;
        currNum = 0;
        choseOp = false;
        currDecimal = false;
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
            if (currNum === 0 && currDecimal === false){
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

let prevNum = 0;
let operator = '+';
let currNum = 0;

let currDecimal = false;
let choseOp = false;

const screenCurrNum = document.querySelector('.screen-current');
const screenPrevNum = document.querySelector('.screen-prev');

const acBtn = document.querySelector('#all-clear');
acBtn.addEventListener('click', allClear);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equals);

const signBtn = document.querySelector('#sign');
signBtn.addEventListener('click', changeSign);

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(num => num.addEventListener('click', addNum));

const operators = document.querySelectorAll('[data-operator]');
operators.forEach(op => op.addEventListener('click', chooseOperator));
