
var GameObject=function(bId,bgC){
	this.id=bId;
	this.bgColor=bgC;

	this.displayTimer1=0;
	this.displayTimer2=0;
}

GameObject.prototype.display=function(){
	simon.disableControl(true);
	this.displayTimer=setTimeout(function(){
		document.getElementById('bt'+this.id).style.opacity=0.6;
	},100);
	this.displayTimer2=setTimeout(function(){
		document.getElementById('bt'+this.id).style.opacity=1;
		this.check();
	},200);
}

GameObject.prototype.check=function(){
	if(this.id===simon.sequence[simon.moveNum]){
		if(simon.moveNum===19){
			simon.startSequence(1);
		}else if(simon.moveNum===simon.seqIterator-1){
			simon.moveNum=0;
			simon.startSequence(0);
		}else{
			simon.moveNum++;
			simon.disableControl(false);
		}
	}else{
		simon.showExclamation();
		if(simon.isStrict===1){
			simon.startSequence(1);
		}else{
			simon.startSequence(2);
		}
	}
}


var button0=new GameObject(0,"green");
var button1=new GameObject(1,"red");
var button2=new GameObject(2,"yellow");
var button3=new GameObject(3,"blue");