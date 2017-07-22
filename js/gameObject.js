
var GameObject=function(bId,bgC,bgCL){
	this.id=bId;
	this.bgColor=bgC;
	this.bgColorLight=bgCL;

	this.displayTimer1=0;
	this.displayTimer2=0;
}

GameObject.prototype.display=function(){
	simon.disableControl(true);
	
	var localThisObject=this;
	var localDocument=document.getElementById('bt'+localThisObject.id);
	var localAudio=document.getElementById('soundbutton'+localThisObject.id);

	localThisObject.displayTimer=setTimeout(function(){
		//localDocument.style.opacity=0.6;
		localDocument.style.backgroundColor=localThisObject.bgColorLight;
		localAudio.play();
	},100);
	localThisObject.displayTimer2=setTimeout(function(){
		localDocument.style.backgroundColor=localThisObject.bgColor;
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
		document.getElementById('soundbuttonWrong').play();
		if(simon.isStrict===1){
			simon.showExclamation("!!",1);
		}else{
			simon.moveNum=0;
			simon.showExclamation("!!",2)
		}
	}
	//simon.waitForUser();
}


var button0=new GameObject(0,"#17e510","#89ed91");
var button1=new GameObject(1,"#e51025","#ef8686");
var button2=new GameObject(2,"#fff20a","#f4ed89");
var button3=new GameObject(3,"#2330ea","#6d75ed");