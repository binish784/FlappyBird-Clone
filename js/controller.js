class Controller{
  constructor(){
    this.keydown=false;
  }

  handleKeyDown(event,touch){
    console.log(event);
    if((event.type=="keydown" || touch ||event.type=="mousedown") && !this.keydown){
      if((event.keyCode==32 || touch  || event.which==1) && !game.game_start){
        game.game_over=false;
        game.game_start=true;
        game.pipe_speed=2;
        game.screen=1;
        engine.run();
      }else if((event.keyCode==32 || touch || event.which==1) && game.game_over){
        game=new Game(canvas);
        game.loadAssets(engine);
        game.initializePipes();
        game.screen=0;
        game.pipe_speed=0;
        engine.run();
      }
      if(event.keyCode==32 || touch || event.which==1){
        game.bird_jump();
        this.keydown=true;
      }
    }else if((event.type=="keyup" || touch || event.type=="mouseup") && this.keydown){
      this.keydown=false;
    }
  }

}
