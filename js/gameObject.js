
var GameObject=function(bId,bgC){
	this.id=bId;
	this.bgColor=bgC;

	this.displayTimer1=0;
	this.displayTimer2=0;
}

GameObject.prototype.display=function(){
	simon.disableControl(true);
	var localThisObject=this;
	var localDocument=document.getElementById('bt'+localThisObject.id);
	localThisObject.displayTimer=setTimeout(function(){
		localDocument.style.opacity=0.6;
	},100);
	localThisObject.displayTimer2=setTimeout(function(){
		localDocument.style.opacity=1;
		localThisObject.check();
	},200);
}

GameObject.prototype.check=function(){
	console.log(this.id);
	if(this.id===simon.sequence[simon.moveNum]){
		if(simon.moveNum===19){
			simon.startSequence(1);
		}else if(simon.moveNum===simon.seqIterator-1){
			simon.moveNum=0;
			simon.startSequence(0);
		}else{
			simon.moveNum++;
			simon.disableControl(false);
			simon.waitForUser();
		}
	}else{
		if(simon.isStrict===1){
			simon.showExclamation("!!",1);
		}else{
			simon.moveNum=0;
			simon.showExclamation("!!",2)
		}
	}
	//simon.waitForUser();
}


var button0=new GameObject(0,"green");
var button1=new GameObject(1,"red");
var button2=new GameObject(2,"yellow");
var button3=new GameObject(3,"blue");