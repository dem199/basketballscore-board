let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreElOne =document.getElementById("home-score")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeStoreElTwo =document.getElementById("home-score")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreElThree =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreElOne.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreElTwo.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreElThree.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreElOne =document.getElementById("guest-score")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestStoreElTwo =document.getElementById("guest-score")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestStoreElThree =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreElOne.textContent = guestScore
}


function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreElTwo.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreElThree.textContent = guestScore
}


function newGame() {
    guestStoreElOne.textContent = 0
    guestStoreElTwo.textContent = 0
    guestStoreElThree.textContent = 0
    homeStoreElOne.textContent = 0
    homeStoreElTwo.textContent = 0
    homeStoreElThree.textContent = 0
    
}

