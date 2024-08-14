let saveEl = document.getElementById("save-el")

let countElBtrfly = document.getElementById("count-el-butterfly")
let countElLdybg = document.getElementById("count-el-ladybug")
let countElAnt = document.getElementById("count-el-ant")
let countElRlyply = document.getElementById("count-el-rolypoly")

let countB = 0
let countL = 0
let countA = 0
let countR = 0

function increment_up(value) {
    if (value == "btn-up-butterfly") {
        countB += 1
        countElBtrfly.textContent = countB
    } else if (value == "btn-up-ladybug") {
        countL += 1
        countElLdybg.textContent = countL
    } else if (value == "btn-up-ant") {
        countA += 1
        countElAnt.textContent = countA
    } else if (value == "btn-up-rolypoly") {
        countR += 1
        countElRlyply.textContent = countR
    }
}

function increment_down(value) {
    if (value == "btn-down-butterfly") {
        if (countB > 0) {
            countB -= 1
        } else {
            countB = 0
        }
        countElBtrfly.textContent = countB
    } else if (value == "btn-down-ladybug") {
        if (countL > 0) {
            countL -= 1
        } else {
            countL = 0
        }
        countElLdybg.textContent = countL
    } else if (value == "btn-down-ant") {
        if (countA > 0) {
            countA -= 1
        } else {
            countA = 0
        }
        countElAnt.textContent = countA
    } else if (value == "btn-down-rolypoly") {
        if (countR > 0) {
            countR -= 1
        } else {
            countR = 0
        }
        countElRlyply.textContent = countR
    }
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
