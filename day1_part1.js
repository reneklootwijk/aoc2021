'use strict'

const fs = require('fs')

let previous
let count = 0
let total = 0

const all = fs.readFileSync('input_day1', 'utf-8')
all.split(/\r?\n/).forEach(measurement =>  {
    total++
    if(previous !== undefined) {
        measurement = parseInt(measurement, 10)
        if(measurement > previous) {
            count++
        }
    }

    previous = measurement
})

console.log(`${count} measurements out of ${total} are higher than previous measurement`)