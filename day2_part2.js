'use strict'

const fs = require('fs')

let depth = 0
let position = 0
let aim = 0

const all = fs.readFileSync('input_day2', 'utf-8')

all.split(/\r?\n/).forEach(movement =>  {
    let [move, distance] = movement.split(' ')

    distance = parseInt(distance, 10)
    
    switch(move) {
        case 'forward':
            position += distance
            depth += (aim * distance)
            break

        case 'down':
            aim += distance
            break
        
        case 'up':
            aim -= distance
            break

        default:
            console.log(`Unknown move '${move}`)
    }
})

console.log(`Current position is ${position} and depth is ${depth}. Answer: ${depth * position}`)