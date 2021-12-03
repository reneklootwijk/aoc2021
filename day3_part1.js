'use strict'

const fs = require('fs')


const measurements = fs.readFileSync('input_day3', 'utf-8').split(/\r?\n/)

let numBits = measurements[0].length
let zeros = new Array(numBits).fill(0)
let ones = new Array(numBits).fill(0)
let gamma = 0
let epsilon = 0

measurements.map(x => parseInt(x, 10)).forEach(consumption =>  {
    consumption = parseInt(consumption, 2)

    for(let bit = 0; bit < numBits; bit++) {
        (consumption & Math.pow(2,bit)) >> bit ? ones[bit]++ : zeros[bit]++
    }
})

zeros.map((zeros, index) => gamma += (ones[index] > zeros ? 1 : 0) * Math.pow(2, index))
zeros.map((zeros, index) => epsilon += (zeros > ones[index]? 1 : 0) * Math.pow(2, index))

console.log(`Gamma: ${gamma}, Epsilon: ${epsilon}, Power consumption: ${gamma * epsilon}`)
