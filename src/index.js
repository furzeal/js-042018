/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let result = [];
    array.forEach(function (item, i, array) {
        result.push(
            fn(item, i, array)
        );
    });
    return result;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let value = initial || array[0];
    array.forEach(function (item, i, array) {
        value = fn(value, item, i, array);
    });
    return value;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
 upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let result = [];
    for (let key in obj) {
        result.push(key.toUpperCase());
    }
    return result;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let result = [];
    if (to < 0) {
        to = array.length + to;
    }
    if (to > array.length) {
        to = array.length;
    }
    if (from < 0) {
        from = 0;
    }

    for (let i = from; i < to; i++) {
        result.push(array[i]);
    }
    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
const handler = {
    get: function (obj, prop) {
        return obj[prop] * obj[prop];
    }
};

function createProxy(obj) {
    return new Proxy(obj, handler);
}


export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
