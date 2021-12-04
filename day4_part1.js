'use strict'

const fs = require('fs')

const lines = fs.readFileSync('input_day4', 'utf-8').split(/\r?\n/)

function score(board) {
    let sum = 0

    board.rows.forEach(row => {
        sum += row.reduce((pv, cv) => pv + cv, 0)
    })

    return sum
}

let drawList 
let boards = []
let rowCol = 0
let boardRows = []
let boardCols = []

drawList = lines[0].split(',').map(x => parseInt(x, 10))
lines.shift()

lines.forEach((line, index) => {
    line = line.replace(/^\s+/g, '')

    if(line.length === 0) {
        return
    }

    rowCol++
    boardRows.push(line.split(/\s+/).map(x => parseInt(x, 10)))
    
    if(rowCol === 5) {
        for(let col = 0; col < 5; col++) {
            boardCols.push([boardRows[0][col],boardRows[1][col],boardRows[2][col],boardRows[3][col],boardRows[4][col]])
        }
        boards.push({
            rows: boardRows,
            cols: boardCols
        })
        rowCol = 0
        boardRows = []
        boardCols = []
    }
})

drawList.forEach(drawing => {
    boards.forEach((board, index) => {
        board.rows.forEach(row => {
            if(row.indexOf(drawing) !== -1) {
                row.splice(row.indexOf(drawing), 1)
            }
            if(row.length === 0) {
                console.log(`Score: ${score(boards[index]) * drawing}`)
                process.exit(0)
            }
        })
        board.cols.forEach(col => {
            if(col.indexOf(drawing) !== -1) {
                col.splice(col.indexOf(drawing), 1)
            }
            if(col.length === 0) {
                console.log(`Score: ${score(boards[index]) * drawing}`)
                process.exit(0)
            }
        })
    })
})