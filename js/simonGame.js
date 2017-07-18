
var iterator;
var sequence=[];
var color=["red","green","blue","yellow"];
var switchStatus=0;
var curLevel=0;


var render=function(){
	var canvas=document.getElementById('gameCanvas');
	var context=canvas.getContext('2d');

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

    canvas.addEventListener('click',function(event){
    	console.log(event.pageX+" "+event.pageY);
    });

}

//Execute
