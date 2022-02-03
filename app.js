const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector("#board")
const colors = ["red", "blue", "green", "pink", "purple", "white"]

let time = 0
let score = 0

startBtn.addEventListener("click", (event) => {
    event.preventDefault()
    screens[0].classList.add("up")
})

timeList.addEventListener("click", event => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"))
        screens[1].classList.add("up")
        stratGame()
    }
})

board.addEventListener("click", event => {
    if (event.target.classList.contains("sharik")) {
        score++
        event.target.remove()
        creatRandomSharik()
    }
})

function stratGame() {
    setInterval(decreaceTime, 1000)
    creatRandomSharik()
    setTime(time)
}

function decreaceTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}


function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
       board.innerHTML = `<div class= "neww"  href="#" onclick="location.reload();">Новая игра</div>
    <h1>Счёт: <span class="primary">${score}</span></h1>`
function refreshPage(){
    window.location.href = window.location.href;
}
}

function creatRandomSharik() {
    const sharik = document.createElement("div")
    const size = getRandomNumber(10, 90)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()

    sharik.classList.add("sharik")
    sharik.style.width = `${size}px`
    sharik.style.height = `${size}px`
    sharik.style.top = `${y}px`
    sharik.style.left = `${x}px`
    sharik.style.backgroundColor = color
    sharik.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    board.append(sharik)

}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}