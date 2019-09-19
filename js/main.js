var canvas=document.getElementById("canvas");

game=undefined;
controller=undefined;

window.addEventListener("load",function(){

  game=new Game(canvas);

  game.loadAssets();

  game.initializePipes();


  controller = new Controller();

})


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
