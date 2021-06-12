console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

//function(class)

// let globalScope = {
//     outerScope: null,
//     a: 10,
//     f: 'Function',
// }
// var a = 10
// f(50)
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 50,
//         param: undefined,
//         inner: 'Function'
//     }
//     console.log(a)
//     test()
// }
//
// function test() {
//     let fScope = {
//         outerScope: globalScope,
//
//     }
//     console.log(a)
// }
//
//
//
// let b = 20


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

export function sum(n: number) {
    return function (n2: number) {
        return n + n2
    }
}

console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0
//     return function () {
//         return ++count
//     }
// }
// const counter = makeCounter()
// const counter2 = makeCounter()
//
// console.log(counter())
// console.log(counter())
// console.log(counter())
//
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounter03(num: number) {
    let count = num
    return {
        increase: () => ++count,
        decrease: () => --count,
        reset: () => count = 0,
        set: (newNum: number) => count = newNum,
    }
}

const counter03 = makeCounter03(2)

console.log('function makeCounter03')
console.log(counter03.increase())
console.log(counter03.increase())
console.log(counter03.reset())
console.log(counter03.increase())
console.log(counter03.increase())
console.log(counter03.decrease())
console.log(counter03.increase())
console.log(counter03.increase())
console.log(counter03.set(11))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n:number) => n

    let _arguments: number[] = []

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args]
        if (_arguments.length >= num) {
            _arguments.length = num
            return _arguments.reduce((acc, num) => acc + num)
        } else {
            return helper
        }
    }

    return helper

}
console.log('superSum')
console.log(superSum(0)) //0
//@ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
//@ts-ignore
console.log(superSum(3)(2)(5,3)) //10
//@ts-ignore
console.log(superSum(3)(2,5,3) )//10
//@ts-ignore
console.log(superSum(3)(2,5)(3))//10
//@ts-ignore
console.log(superSum(3)(2,5)(3,9)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.


export default () => {
};