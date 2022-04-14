import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./file/3.txt', 'utf8'),
    thenFs.readFile('./file/2.txt', 'utf8'),
    thenFs.readFile('./file/1.txt', 'utf8'),
]


Promise.race(promiseArr).then(result => {
    console.log(result);
})
// Promise.all(promiseArr).then(result => {
//     console.log(result);
// })