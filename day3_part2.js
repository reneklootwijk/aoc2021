'use strict'

const fs = require('fs')

const measurements = fs.readFileSync('input_day3', 'utf-8').split(/\r?\n/)

let numBits = measurements[0].length

let result = measurements.map(x => parseInt(x, 2))

for(let bit = numBits - 1; bit >= 0; bit--) {
    let zeros = 0
    let ones = 0

    result.forEach(consumption =>  {
        (consumption & Math.pow(2, bit)) >> bit ? ones++ : zeros++
    })

    let toDelete = []
    result.forEach((consumption, index) =>  {
        if((consumption & Math.pow(2, bit)) !== (ones >= zeros ? Math.pow(2,bit) : 0)) {
            toDelete.push(index)
        }
    })

    toDelete.slice(0).reverse().map(x => result.splice(x, 1))

    if(result.length === 1) {
        break
    }
}

let oxygen = result[0]


result = measurements.map(x => parseInt(x, 2))

for(let bit = numBits - 1; bit >= 0; bit--) {
    let zeros = 0
    let ones = 0

    result.forEach(consumption =>  {
        (consumption & Math.pow(2, bit)) >> bit ? ones++ : zeros++
    })

    let toDelete = []
    result.forEach((consumption, index) =>  {
        if((consumption & Math.pow(2, bit)) !== (ones < zeros ? Math.pow(2, bit) : 0)) {
            toDelete.push(index)
        }
    })

    toDelete.slice(0).reverse().map(x => result.splice(x, 1))

    if(result.length === 1) {
        break
    }
}

let co2 = result[0]

console.log(`Oxygen generator rating: ${oxygen}`)
console.log(`CO2 scrubber rating: ${co2}`)
console.log(`Life support rating: ${co2 * oxygen}`)
