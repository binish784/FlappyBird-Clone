
class Controller{
  constructor(){
    this.keydown=false;
  }

  handleKeyDown(event){
    if(event.type=="keydown" && !this.keydown){
      if(event.keyCode==32){
        game.bird_jump();
        this.keydown=true;
      }
    }else if(event.type=="keyup" && this.keydown){
      this.keydown=false;
    }
  }
}
