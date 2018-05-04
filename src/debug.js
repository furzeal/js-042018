function calculator(number = 0, ...args) {
    return {
        sum: function () {
            return args.reduce((previous, current) => previous + current, number);
        },
        dif: function () {
            return args.reduce((previous, current) => previous - current, number);
        },
        div: function () {
            return args.reduce((previous, current) => previous / current, number);
        },
        mul: function () {
            return args.reduce((previous, current) => previous * current, number);
        }
    }
}

let calc = calculator(5);
console.log(calc.sum(3, 2));