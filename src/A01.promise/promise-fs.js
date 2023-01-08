const fs = require('fs')
// fs.readFile('./resource/yw.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/yw.tx', (err, data) => {
        if (err) reject(err);
        resolve(data)
    })
})

p.then((data) => {
    console.log(data.toString())
}, (reason) => {
    console.log(reason)
})