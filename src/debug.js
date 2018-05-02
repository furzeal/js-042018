// // function slice(array, from = 0, to = array.length) {
// //     let result = [];
// //     for (let i = from; i < to; i++) {
// //         result.push(array[i]);
// //     }
// //     return result;
// // }
// //
// //
// // console.log(slice([1, 2, 3, 4, 5]));
//
//
// class ProxyObj {
//     constructor() {
//         return new Proxy(this, this);
//     }
//
//     get(target, prop) {
//         return this[prop] || '';
//     }
//
//     set(target, prop, value) {
//         this[prop] = value * value;
//     }
// }

const handler = {
    get: function (obj, prop) {
        return obj[prop] * obj[prop];
    }
};

function createProxy(obj) {
    return new Proxy(obj, handler);
}



let obj = {};

obj = createProxy(obj);

console.log(obj);

obj.x = 3;
console.log(obj.x);

obj.y = 4;

console.log(obj.x);
console.log(obj.y);