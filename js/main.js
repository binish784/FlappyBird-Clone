var canvas=document.getElementById("canvas");

var game=new Game(canvas);

game.initializePipes();

var controller = new Controller();

function update(){
  game.update();
}

function render(){
  game.render();
}

var engine= new Engine(1000/30,update,render);

engine.start();


window.addEventListener("keydown",function(event){
  controller.handleKeyDown(event);
});

window.addEventListener("keyup",function(event){
  controller.handleKeyDown(event);
});
