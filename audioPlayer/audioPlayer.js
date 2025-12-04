let alien = document.getElementById("alien");
alien.addEventListener('click', playAlien);

function playAlien() {
    let alienSound = new Audio("audio/alien.mp3");
    alienSound.play();
}


let cappuccino = document.getElementById("cappuccino");
cappuccino.addEventListener('click', playCappuccino);

function playCappuccino() {
    let cappuccinoSound = new Audio("audio/cappuccino.mp3");
    cappuccinoSound.play();
}


let car = document.getElementById("car");
car.addEventListener('click', playCar);

function playCar() {
    let carSound = new Audio("audio/car.mp3");
    carSound.play();
}


let dore = document.getElementById("dore");
dore.addEventListener('click', playDore);

function playDore() {
    let doreSound = new Audio("audio/dore.mp3");
    doreSound.play();
}


let spaghetti = document.getElementById("spaghetti");
spaghetti.addEventListener('click', playSpaghetti);

function playSpaghetti() {
    let spaghettiSound = new Audio("audio/spaghetti.mp3");
    spaghettiSound.play();
}