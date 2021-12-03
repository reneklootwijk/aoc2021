'use strict'

const fs = require('fs')

let previous
let count = 0
let total = 0

const all = fs.readFileSync('input_day1', 'utf-8')
const measurements = all.split(/\r?\n/).map(x => parseInt(x, 10))

for(let index = 0; index < measurements.length - 2; index++) {
    total++

    let window = measurements[index] + measurements[index + 1] + measurements[index + 2]

    if(previous !== undefined) {
        if(window > previous) {
            count++
        }
    }

    previous = window
}

console.log(`${count} windows out of ${total} are higher than previous window`)