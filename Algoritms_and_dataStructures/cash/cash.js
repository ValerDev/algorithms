const cashFunction = (fn) => {
    const cash = {};
    return (n) => {
        if (cash[n]) {
            console.log('from cash', cash[n]);
            return cash[n]
        }
        const result = fn(n)
        console.log('not from cash', result);
        cash[n] = result
        return result
    }
}


const factorial = (n) => {
    let res = 1;
    while (n >= 1) {
        res *= n
        n--
    }
    return res
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)
cashFactorial(1)