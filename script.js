console.log("Code Running")

let rockMovingSound = new Audio("images/rockmoving.mp3")

let riddle1 = new Audio("images/riddle1")
let riddle2 = new Audio("images/riddle2")
let riddle3 = new Audio("images/riddle3")

let candle = document.querySelector("#candle")
let block1 = document.querySelector("#block1")
let trapdoor1 = document.querySelector("#trapdoor1")


function playSound1() {
    riddle1.play()
}

function playSound2() {
    riddle2.play()
}

function playSound3() {
    riddle3.play()
}

setTimeout(playSound1, 16000)

candle.addEventListener("click", function(e) {
    block1.innerHTML = `<a-animation attribute="position" to="-6 46 16" dur="5000"></a-animation>`
    trapdoor1.innerHTML = `<a-animation attribute="position" to="-5.5 40 8" dur="5000"></a-animation>`
    rockMovingSound.play()
    setTimeout(playSound2, 5000)
})

let glass = document.querySelector("#glass")
let block2 = document.querySelector("#block2")
let trapdoor2 = document.querySelector("#trapdoor2")

glass.addEventListener("click", e => {
    block2.removeAttribute("static-body")
    block2.innerHTML = `<a-animation attribute="position" to="6.5 20 -1" dur="5000"></a-animation>`
    trapdoor2.innerHTML = `<a-animation attribute="position" to="5.5 20 5.5" dur="5000"></a-animation>`
    rockMovingSound.play()
    setTimeout(playSound3, 5000)
    
})


let skull = document.querySelector("#skull")
console.log(skull)
let door = document.querySelector("#door")
let doorwall1 = document.querySelector("#doorwall1")
let doorwall2 = document.querySelector("#doorwall2")

skull.addEventListener("click", e=> {
    console.log("Skull clicked")
    doorwall1.removeAttribute("static-body")
    doorwall2.removeAttribute("static-body")
    door.removeAttribute("static-body")
    door.innerHTML = `<a-animation  to="0 90 0" dur="2000"></a-animation>`
})