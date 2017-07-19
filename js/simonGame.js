
const radius=180;
const lineWidth=100;
const outerRadius=260;

var cX,cY,cWidth,cOuter;
var iterator=0;
var sequence=[];
var color=["#17e510","#e51025","#fff20a","#2330ea"]; //g,r,y,b
var colorLight=["#6ff283","#ef586f","#eaf276","#70c9ef"];
var soundAr=["Gre","Red","Yel","Blu"];
var curLevel=0;
var canvas,context;
var isStrict=0,onOff=0;

var st1,st2,stCall1,stCall2;

/*
Check whether input provided by the user is correct
*/
var check=function(curInput){
	if(curInput===sequence[iterator]){
		iterator++;
		if(iterator===sequence.length){
			if(iterator==20){
				console.log("You have reached the top of the world");
				executeGame();
			}else{
				console.log("Passed Level.");
				iterator=0;
				(function(){
					setTimeout(function(){
						executeGame();
					},2000);
				})();
				//executeGame();
			}
		}
	}else{
		console.log("Wrong Input" +curInput);
		(function(){
			clearTimeout(st1);clearTimeout(st2);
			clearTimeout(stCall1);clearTimeout(stCall2);
				
			setTimeout(function(){
				document.getElementById('soundbuttonWrong').play();
				document.getElementById('ledtext').innerHTML="!!";
				document.getElementById('ledtext').style.color="#ea0707";
			},200);
			setTimeout(function(){
				document.getElementById('ledtext').style.color="#631313";
			},400);
			setTimeout(function(){
				document.getElementById('ledtext').style.color="#ea0707";
			},600);
			setTimeout(function(){
				document.getElementById('ledtext').style.color="#631313";
			},800);
			setTimeout(function(){
				document.getElementById('ledtext').style.color="#ea0707";
			},1000);
			setTimeout(function(){
				if(isStrict===1){
					sequence=[];
					curLevel=0;
					iterator=0;
				}
				executeGame(isStrict);
			},2000);
		
		})();
	}
}

/*
Creating event listeners for all the buttons
*/
var createEventListener=function(){
	/*
	Color buttons
	*/
	document.getElementById('bt0').addEventListener('click',function(){
		(function(id){
			stCall1=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=0.6;
				document.getElementById('soundbuttonGre').play();
			},200);
			stCall2=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=1;
				check(id);
			},450);
		})(0);
	});
	document.getElementById('bt1').addEventListener('click',function(){
		(function(id){
			stCall1=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=0.6;
				document.getElementById('soundbuttonRed').play();
			},200);
			stCall2=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=1;
				check(id);
			},450);
		})(1);
	});
	document.getElementById('bt2').addEventListener('click',function(){
		(function(id){
			stCall1=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=0.6;
				document.getElementById('soundbuttonYel').play();
			},200);
			stCall2=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=1;
				check(id);
			},450);
		})(2);
	});
	document.getElementById('bt3').addEventListener('click',function(){
		(function(id){
			stCall1=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=0.6;
				document.getElementById('soundbuttonBlu').play();
			},200);
			stCall2=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=1;
				check(id);
			},450);
		})(3);
	});

	//Strict Button
	document.getElementById('strictB').addEventListener('click',function(){
		if(onOff===0){
			console.log("Switch on.");
			return;
		}
		if(isStrict===1){
			document.getElementById('strictB').style.backgroundColor="#fff607";
			isStrict=0;
		}else{
			document.getElementById('strictB').style.backgroundColor="#07ea16";
			isStrict=1;
		}
	});

	//Switch On/Off
	document.getElementById('sOnOff').addEventListener('click',function(){
		if(onOff==1){
			document.getElementById('sOnOff').style.backgroundColor="#f7070f";
			document.getElementById('strictB').style.backgroundColor="#fff607";
			document.getElementById('ledtext').style.color="#631313";
			onOff=0;isStrict=0;
			clearTimeout(st1);clearTimeout(st2);
			clearTimeout(stCall1);clearTimeout(stCall2);
			document.getElementById('ledtext').innerHTML="--";
			document.getElementById('sOnOff').innerHTML="On";
		}else{
			document.getElementById('sOnOff').innerHTML="Off";
			document.getElementById('sOnOff').style.backgroundColor="#5bf209";
			onOff=1;
			
		}
	});
}

/*
Enabling and disabling buttons to prevent unwanted situations.
*/
var disableButton=function(){
	document.getElementById('bt0').disabled=true;
	document.getElementById('bt1').disabled=true;
	document.getElementById('bt2').disabled=true;
	document.getElementById('bt3').disabled=true;
	document.getElementById('startB').disabled=true;
}

var enableButton=function(){
	document.getElementById('bt0').disabled=false;
	document.getElementById('bt1').disabled=false;
	document.getElementById('bt2').disabled=false;
	document.getElementById('bt3').disabled=false;
	document.getElementById('startB').disabled=false;
}

/*
Displaying the sequence
*/
var display=function(){
	
	for(var i=0;i<curLevel;i++){
		
		(function(j,id){
			st1=setTimeout(function(){
				console.log(j+" "+id);
				if(j===0){
					disableButton();
				}
				document.getElementById('bt'+id).style.opacity=0.6;
				document.getElementById('soundbutton'+soundAr[id]).play();
			},j*1000+300+1200);
			st2=setTimeout(function(){
				document.getElementById('bt'+id).style.opacity=1;
				if(j==curLevel-1){
					enableButton();
				}
			},j*1000+600+1200);
			
		})(i,sequence[i]);
	}
}

/*
Game Logic.
*/
var executeGame=function(type){
	if(type===1){
		sequence=[];
		curLevel=0;
		iterator=0;
		sequence.push(Math.floor(Math.random()*4));
		curLevel++;
		document.getElementById('ledtext').innerHTML=(curLevel<10?'0'+curLevel:curLevel);
		console.log("Pushed element in sequence. Level: "+curLevel);
		display();
		return;
	}else if(type===0){
		document.getElementById('ledtext').innerHTML=(curLevel<10?'0'+curLevel:curLevel);
		display();
		return;
	}else if(curLevel===21){
		console.log("You won!!!");
		executeGame(1);
		return;
	}else{
		sequence.push(Math.floor(Math.random()*4));
		curLevel++;
		document.getElementById('ledtext').innerHTML=(curLevel<10?'0'+curLevel:curLevel);
		console.log("Pushed element in sequence. Level: "+curLevel);
		display();
	}
}

/*
Animation when the game starts.
*/
var initiate=function(str){
	(function(){
		document.getElementById('ledtext').innerHTML=str;
		setTimeout(function(){
			document.getElementById('ledtext').style.color="#ea0707";
		},200);
		setTimeout(function(){
			document.getElementById('ledtext').style.color="#631313";
		},400);
		setTimeout(function(){
			document.getElementById('ledtext').style.color="#ea0707";
		},600);
		setTimeout(function(){
			document.getElementById('ledtext').style.color="#631313";
		},800);
		setTimeout(function(){
			document.getElementById('ledtext').style.color="#ea0707";
		},1000);
		setTimeout(function(){
			executeGame(1);
		},1100);
	})();
}

/*
Start here.......
*/
var render=function(){
	if(onOff===0){
		console.log("Switch on the game.");
		return;
	}
	clearTimeout(st1);clearTimeout(st2);
	clearTimeout(stCall1);clearTimeout(stCall2);
	setTimeout(function(){
    	initiate("--");
    },2000);
}
