class Engine{

	constructor(frame_rate,update,render){
		this.now_time=0;
		this.last_time=0;
		this.update=update;
		this.updated=false;
		this.render=render;
		this.animator=undefined;
		this.accumulated_time=0;
<<<<<<< HEAD
    	this.frame_rate=frame_rate;
=======
    this.frame_rate=frame_rate;
>>>>>>> 89a254391c1feda5ac86f5f8b97418749a37416d
	}

	handleScreen(){
		switch (game.screen) {
			case 0:
				this.render();
				game.showReady();
				break;
			case 2:
				game.showGameOver();
				break;
		}
	}

	run(){
		if(!game.game_over && game.game_start){
			this.now=this.getTimestamp();
			this.accumulated_time+=(this.last_time-this.now_time);
			if(this.accumulated_time>=this.frame_rate*3){
				this.accumulated_time=this.frame_rate;
			}
			while(this.accumulated_time>=this.frame_rate){
				this.accumulated_time-=this.frame_rate;
				this.update();
				this.updated=true;
			}
			if(this.updated){
				this.render();
				this.updated=false;
			}
			this.animator=window.requestAnimationFrame(function(){
				this.run();
			}.bind(this));
			this.last_time=this.now;
		}else{
			this.handleScreen();
		}
	}

	getTimestamp(){
		if(window.performance && window.performance.now()){
			return window.performance.now();
		}else{
			return new Date().getTime();
		}
	}

	start(){
		this.last_time=this.getTimestamp();
		this.animator=window.requestAnimationFrame(function(){
			this.run();
		}.bind(this));
	}

	stop(){
		window.cancelAnimationFrame(this.animator);
	}

}
