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