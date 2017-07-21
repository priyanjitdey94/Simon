
var Game=function(){
	this.onOff=0;
	this.isStrict=0;
	
	this.sequence=[];
	this.seqIterator=0;
	this.moveNum=0;
	
	this.timerEvents=[];
	this.displayTimer1=0;
	this.displayTimer2=0;
	this.userTimer=0;
}

Game.prototype.initialize=function(){
	this.sequence=[];
	this.seqIterator=0;
	this.moveNum=0;
}

Game.prototype.switchGame=function(){
	this.clearTimers();
	this.disableControl(true);
	if(this.onOff===0){
		this.onOff=1;
		document.getElementById('ledtext').style.color="#ea0707";
	}else{
		this.onOff=0;
		document.getElementById('ledtext').innerHTML="--";
		document.getElementById('ledtext').style.color="#631313";
	}
}

Game.prototype.clearTimers=function(){
	var len=this.timerEvents.length;
	for(var i=0;i<len;i++){
		clearTimeout(this.timerEvents[i]);
	}
	clearTimeout(this.displayTimer1);
	clearTimeout(this.displayTimer2);
}

Game.prototype.showExclamation=function(){
	setTimeout(function(){
		document.getElementById('ledtext').style.color="#631313";
	},100);
	setTimeout(function(){
		document.getElementById('ledtext').style.color="#631313";
	},300);
	setTimeout(function(){
		document.getElementById('ledtext').style.color="#631313";
		this.startSequence();
	},500);
}

Game.prototype.start=function(){
	this.disableControl(true);
	this.clearTimers();
	this.initialize();
	this.showExclamation();
}

/*
* 0 : Normal Mode. Add a number and display
* 1 : Strict Mode. Empty the array. Add number. Display
* 2 : Repeat Mode. Only Display.
*/
Game.prototype.startSequence=function(seq){
	this.disableControl(true);
	if(seq===0){
		this.sequence.push(Math.floor(Math.random()*4));
		this.seqIterator++;
		document.getElementById('ledtext').innerHTML=(curLevel<10?'0'+curLevel:curLevel);
		this.display();
	}else if(seq===1){
		this.initialize();
		this.startSequence(0);
	}else if(seq===2){
		this.display();
	}
}

Game.prototype.display=function(){
	for(var i=0;i<len;i++){
		this.displayHelper(i,sequence[i],600);
	}
}

Game.prototype.displayHelper=function(j,id,offset){
	this.displayTimer1=setTimeout(function(){
		document.getElementById('bt'+id).style.opacity=0.6;
		document.getElementById('soundButton'+id).play();
	},(j*700)+offset);

	this.displayTimer2=setTimeout(function(){
		document.getElementById('bt'+id).style.opacity=1;
		if(j===this.seqIterator-1){
			this.waitForUser();
		}
	},(j*700)+offset+320);
}

Game.prototype.waitForUser=function(){
	this.disableControl(false);
	this.userTimer=setTimeout(function(){
		this.disableControl(true);
		this.showExclamation();
		this.display();
	},7000);
}

Game.prototype.disableControl=function(status){
	for(var i=0;i<4;i++){
		document.getElementById('bt'+i).disabled=status;
	}
}