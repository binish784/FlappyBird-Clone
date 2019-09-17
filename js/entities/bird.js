class Bird{
  constructor(){
    this.x=150;
    this.y=250;
    this.jumping=false;
    this.jump_height=5;
    this.jump_timer=15;
    this.sprite=new Image();
    this.sprite.src='img/yellow.png';
    this.height=24;
    this.width=34;
    this.sprite_counter=5;
    this.current_frame=1;
    this.jump_tick=this.jump_timer;
    this.color="red";
  }

  fall(gravity){
    if(!this.jumping){
      this.y+=gravity;
    }
  }

  jump(){
    this.jump_tick=this.jump_timer;
    if(!this.jumping){
      this.jumping=true;
    }
    if(this.jumping){
      this.y-=this.jump_height;
    }
  }

  tickJumpTimer(){
    if(this.jumping){
      if(this.jump_tick>0){
        this.y-=this.jump_height;
        this.jump_tick--;
      }else if(this.jump_tick==0){
        this.jump_tick=this.jump_timer;
        this.jumping=false;
      }
    }
    if(this.sprite_counter>0){
      this.sprite_counter--;
    }else if(this.sprite_counter==0){
      this.sprite_counter=5;
      if(this.current_frame>=2){
        this.current_frame=0;
      }else{
        this.current_frame++;
      }
    }
  }

  render(ctx){
    ctx.drawImage(this.sprite,this.width*this.current_frame,0,this.width,this.height,this.x,this.y,this.width,this.height);
  }
}
