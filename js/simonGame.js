/*
@Color codes.
Red    : #fc0000,
Blue   : #1500fc,
Green  : #06d610,
Yellow : #ffea0c,


*/

const radius=45;
const lineWidth=50;
const outerRadius=95;
const centerX=125;
const centerY=125;

var iterator=0;
var sequence=[];
var color=["red","blue","green","yellow"];
var switchStatus=0;
var curLevel=0;
var canvas,context;
var isStrict;

var inCircle=function(x,y,r){
	if(x*x+y*y<r*r){
		return true;
	}
	return false;
}

var check=function(curInput){
	if(curInput===sequence[iterator]){
		iterator++;
		if(iterator===sequence.length){
			if(iterator==20){
				console.log("You have reached the top of the world");
				executeGame(0);
			}else{
				console.log("Passed Level.");
				iterator=0;
				executeGame();
			}
		}
	}else{
		console.log("Wrong Input");
		executeGame(0);
	}
}

var createEventListener=function(){
	canvas.addEventListener('click',function(event){
		var x,y,elemLeft,elemTop;
		elemLeft = document.getElementById("gameCanvas").offsetLeft,
    	elemTop = document.getElementById("gameCanvas").offsetTop,
    	//console.log(elemLeft+" "+elemTop);
		x=event.pageX-elemLeft;y=event.pageY-elemTop;
		//console.log(x+" "+y);
		if(x>125 && y>125 && inCircle(x-125,y-125,95) && !inCircle(x-125,y-125,45)){
			//console.log("blue");
			check(1);
		}
		if(x<125 && y>125 && inCircle(x-125,y-125,95) && !inCircle(x-125,y-125,45)){
			//console.log("green");
			check(2);
		}
		if(x<125 && y<125 && inCircle(x-125,y-125,95) && !inCircle(x-125,y-125,45)){
			//console.log("yellow");
			check(3);
		}
		if(x>125 && y<125 && inCircle(x-125,y-125,95) && !inCircle(x-125,y-125,45)){
			//console.log("red");
			check(0);
		}
	});
}

var pauseListener=function(){
	canvas.removeEventListener('click',function(event){});
}

var display=function(){
	var i,j;
	pauseListener();
	var str="";
	for(i=0;i<curLevel;i++){
		str+=(sequence[i]+" ");
	}
	console.log(str);
	//create the event listener.
}


var executeGame=function(type){
	if(type===0){
		sequence=[];
		curLevel=0;
		iterator=0;
	}

	if(isStrict===1){
		sequence=[];
		iterator=0;
		curLevel=(Math.floor(Math.random()*20)+1);
		var i,j;
		for(i=0;i<curLevel;i++){
			j=(Math.floor(Math.random)*4);
			sequence.push(j);
		}
	}else{
		if(curLevel===21){
			console.log("You won!!!");
			executeGame(0);
		}
		sequence.push(Math.floor(Math.random()*4));
		curLevel++;
		console.log("Pushed element in sequence. Level: "+curLevel);
	}
	display();
}



var render=function(){
	canvas=document.getElementById('gameCanvas');
	context=canvas.getContext('2d');

	context.beginPath();
    context.strokeStyle="#fc0000";
    context.lineWidth=50;
    context.arc(125,125,70,(Math.PI/180)*270,(Math.PI/180)*0,false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle="#1500fc";
    context.lineWidth=50;
    context.arc(125,125,70,(Math.PI/180)*0,(Math.PI/180)*90,false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle="#06d610";
    context.lineWidth=50;
    context.arc(125,125,70,(Math.PI/180)*90,(Math.PI/180)*180,false);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle="#ffea0c";
    context.lineWidth=50;
    context.arc(125,125,70,(Math.PI/180)*180,(Math.PI/180)*270,false);
    context.stroke();
    context.closePath();

    createEventListener();
    executeGame(0);
}

//Execute
