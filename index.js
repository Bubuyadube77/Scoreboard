let countH = 0
let countG = 0
document.getElementById("home-score").textContent
document.getElementById("guest-score").textContent

function plus1H() {
    countH += 1
    document.getElementById("home-score").textContent = countH
}

function plus1G() {
    countG += 1
    document.getElementById("guest-score").textContent = countG
}

function plus2H() {
    countH += 2
    document.getElementById("home-score").textContent = countH
}

function plus2G() {
    countG += 2
    document.getElementById("guest-score").textContent = countG
}

function plus3G() {
    countG += 3
    document.getElementById("guest-score").textContent = countG
}

function plus3H() {
    countH += 3
    document.getElementById("home-score").textContent = countH
}

function reset() {
    countH = 0
    countG = 0
    document.getElementById("home-score").textContent = 0
    document.getElementById("guest-score").textContent = 0
} 

/* let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment() {
    count += 1
    countEl.textContent = count
} */