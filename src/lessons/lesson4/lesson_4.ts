import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// setTimeout(()=>console.log(1),0)
// console.log(2)
// (()=> console.log(3))()
// Promise.resolve(console.log(4))
// Promise.resolve((()=>5)()).then(console.log)
//2 3 4 1
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

Promise.resolve('Promise Data').then(console.log)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
Promise.reject('Promise Error').catch(console.log)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const promise = new Promise((res) => {
    setTimeout(() => {
        res('Promise Data')
    },3000)
})
promise.then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type testObjType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: testObjType = {
    promise: null,
    reject: null,
    resolve: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected: ${paramName}`)
    }
}

export const createPromise = () => {
    const somePromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res
        handlePromise.reject = rej
    })
    handlePromise.promise = somePromise
    handlePromise.promise
        .then(res => handlePromise.onSuccess(res))
        .catch(handlePromise.onError)
    console.log(handlePromise)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('1')
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('0')
}
//@ts-ignore
window.prom = handlePromise

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

let pr = new Promise((res) => {
    setTimeout(() => {
        res('My name is')
    },1000)
})
const onSuccess = (par: any, name = 'Sergiy') => {
    return `${par} ${name}`
}
const print = (value: string) => {
    console.log(value)
}
//@ts-ignore
pr.then(
    onSuccess
)
    .then(
        print
    )

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let pr1 = new Promise(res => {
    setTimeout(() => {
        res({name: 'Anna'})
    },2000)
})
let pr2 = new Promise(res => {
    setTimeout(() => {
        res({age: 16})
    },3000)
})
let pr3 = new Promise(res => {
    setTimeout(() => {
        res({city: ''})
    },4000)
})
Promise.all([pr1, pr2, pr3]).then(
    (arr) => {
        let obj = arr[0]
        let obj1 = arr[1]
        let obj2 = arr[2]
        //@ts-ignore
        console.log({...obj, ...obj1, ...obj2})
    }
)


// just a plug
export default () => {
};