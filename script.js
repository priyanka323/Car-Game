let score = document.querySelector('.score');
let startScreen = document.querySelector('.startScreen');
let gameArea= document.querySelector('.gameArea')

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

startScreen.addEventListener("click", startGame)  
document.addEventListener("keydown", KeyPress)
document.addEventListener("keyup", KeyReleased)

function KeyPress(e){
    //console.log(e);
    keys[e.key] = true;
    console.log(keys);
    //console.log("Key pressed", e.key);
}
function KeyReleased(e){
    keys[e.key] = false;
    console.log(keys);
    //console.log("Key Released",e.key);
}

function startGame(){
    console.log("Hey Game Started");
}
