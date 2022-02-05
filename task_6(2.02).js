function mathOperation(arg_1, arg_2, operation) {
    switch (operation) {
        case '*':
            return arg_1 * arg_2;
            break;
        case '+':
            return arg_1 + arg_2;
            break;
        case '-':
            return arg_1 * arg_2;
            break;
        case '/':
            return arg_1 / arg_2;
            break;
        
    }
}
console.log(mathOperation(2, 3, '*'))
console.log(mathOperation(2, 3, '+'))
console.log(mathOperation(2, 3, '-'))
console.log(mathOperation(2, 3, '/'))


/* 7. null используется чтобы указать на отсутсвие какого либо значения
а 0 это уже какое то значение