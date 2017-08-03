/************************************************
* SIMON 	- Memory game
* Developed by 	- Priyanjit Dey
* Organization	- FusionCharts
*
************************************************/

/*
* Function 	: 
* Arguements 	: None
* Purpose 	: click event listeners.
*/

var button0Call=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff===1){
		clearTimeout(simon.userTimer);
		button0.display();
	}
}

var button1Call=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff===1){
		clearTimeout(simon.userTimer);
		button1.display();
	}
}

var button2Call=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff===1){
		clearTimeout(simon.userTimer);
		button2.display();
	}
}

var button3Call=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff===1){
		clearTimeout(simon.userTimer);
		button3.display();
	}
}

var startBCall=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff==1){
		clearTimeout(simon.userTimer);
		simon.start();
	}
}

var strictBCall=function(_onOff){
	if(_onOff!==undefined){
		simon.onOff=_onOff;
	}
	if(simon.onOff===1){
		simon.toggleStrictMode();
	}
}

var sOnOffCall=function(){
	clearTimeout(simon.userTimer);
	simon.switchGame();
}