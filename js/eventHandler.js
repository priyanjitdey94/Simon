
var createEventListener=function(){
	document.getElementById('bt0').addEventListener('click',function(){
		if(simon.onOff===1){
			clearTimeout(simon.userTimer);
			button0.display();
		}
	});
	document.getElementById('bt1').addEventListener('click',function(){
		if(simon.onOff===1){
			clearTimeout(simon.userTimer);
			button1.display();
		}
	});
	document.getElementById('bt2').addEventListener('click',function(){
		if(simon.onOff===1){
			clearTimeout(simon.userTimer);
			button2.display();
		}
	});
	document.getElementById('bt3').addEventListener('click',function(){
		if(simon.onOff===1){
			clearTimeout(simon.userTimer);
			button3.display();
		}
	});

	document.getElementById('startB').addEventListener('click',function(){
		if(simon.onOff===1){
			clearTimeout(simon.userTimer);
			simon.start();
		}
	});

	document.getElementById('strictB').addEventListener('click',function(){
		if(simon.onOff===1){
			simon.toggleStrictMode();
		}
	});

	document.getElementById('sOnOff').addEventListener('click',function(){
		clearTimeout(simon.userTimer);
		simon.switchGame();
	});
}
