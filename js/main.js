var canvas = document.createElement('canvas');
canvas.height = config.canvas.height;
canvas.width = config.canvas.width;
canvas.style.backgroundColor="grey";

let scale = findScale(config.canvas.height,config.canvas.width);
canvas.style.transform = `translate(-50%,-50%) scale(${scale}) `;
canvas.style.backgroundColor = "white";
canvas.style.position = "absolute";
canvas.style.left =  "50%";
canvas.style.top = "50%";
canvas.style.touchAction="manipulation"

let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);

var game=new Game(canvas);

var controller=new Controller();

var engine=new Engine(1000/30,update,render);

game.initializePipes();

game.loadAssets(engine);

function update(){
  game.update();
}

function render(){
  game.render();
}

// handle resize - recompute the scale
window.addEventListener('resize',(event)=>{
  let scale = findScale(config.canvas.height,config.canvas.width);
  canvas.style.transform = `translate(-50%,-50%) scale(${scale}) `;
})


// controller listeners
window.addEventListener("touchstart",function(event){
  controller.handleKeyDown(event,true);
})

window.addEventListener("touchend",function(event){
  controller.handleKeyDown(event,true);
})

// window.addEventListener('mousedown',function(event){
//   controller.handleKeyDown(event);
// })

// window.addEventListener('mouseup',function(event){
//   controller.handleKeyDown(event);
// })

window.addEventListener("keydown",function(event){
  controller.handleKeyDown(event);
});

window.addEventListener("keyup",function(event){
  controller.handleKeyDown(event);
});

