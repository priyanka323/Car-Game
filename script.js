let score = document.querySelector('.score');
let startScreen = document.querySelector('.startScreen');
let gameArea= document.querySelector('.gameArea')

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5,

}


startScreen.addEventListener("click", startGame)  
document.addEventListener("keydown", KeyPress)
document.addEventListener("keyup", KeyReleased)

function playGame(){
    console.log("in the game");
    let car = document.querySelector('.car');

    let road = gameArea.getBoundingClientRect();

    if(player.start == true){
        if(keys.ArrowUp && player.y>road.top){
            
            player.y = player.y-player.speed;
        }
        if(keys.ArrowDown && player.y<road.bottom){
            player.y = player.y+player.speed;
        }
        if(keys.ArrowLeft && player.x>road.left){
            player.x = player.x-player.speed;
        }
        if(keys.ArrowRight && player.x<road.width-50){
            player.x = player.x+player.speed;
        }
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        window.requestAnimationFrame(playGame);
    }
}

function KeyPress(e){
    //console.log(e);
    if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight")
        
    keys[e.key] = true;
    //console.log(keys);
    //console.log("Key pressed", e.key);
}
function KeyReleased(e){
    if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight")
    
    keys[e.key] = false;
    //console.log(keys);
    //console.log("Key Released",e.key);
}

function startGame(){
    //console.log("Hey Game Started");
    //added and removed classes
    startScreen.classList.add('hide');
    gameArea.classList.remove('hide');

    for(let x = 0; x < 10; x++){
        let div = document.createElement('div');
        div.classList.add('line');
        div.y = x * 150;
        div.style.top = (x*150)+"px";
        gameArea.appendChild(div)
    }


    player.start = true
    window.requestAnimationFrame(playGame);
    //startScreen.classList.add('hide');
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

    //create car element
    let car = document.createElement('div');
    car.innerText = "Car";
    //setup class to car element
    car.setAttribute("class", "car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
}
