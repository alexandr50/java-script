function power(val, pow) {
    if (pow == 2) {
        return val ** pow
    }
    else {
        return val * power(val, pow - 1)
    }
}

console.log(power(2, 4))