function bindFunction(fn, ...args) {
    console.log(fn(...args));
    return fn(...args);
}

let sum = (a, b, c) => a + b + c;

bindFunction(sum, 2, 4, 6);