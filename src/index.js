const Store = require('./store')

const counter = new Store()

let s1 = counter.subscribe(data => console.log('subscribe 1: ', data))
let s2 = counter.subscribe(data => console.log('subscribe 2: ', data))

console.log(counter.state)
// undefined
counter.state = 1
console.log(counter.state)
// 1

setTimeout(() => {
    counter.state = 2
    console.log(counter.state)
    // 2
    s1()
}, 3000)

s2()