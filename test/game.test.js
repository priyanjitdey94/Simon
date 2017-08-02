
describe('game',function(){

	beforeAll(function(){
		var tempHtml=/*'<script type="text/javascript" src="../js/game.js"></script>'+
			'<script type="text/javascript" src="../js/gameObject.js"></script>'+
			'<script type="text/javascript" src="../js/eventHandler.js"></script>'+*/
			'<div id="container" position="relative" >'+
			'<div id="buttons">'+'<div class="row">'+
			'<button id="bt0" class="btn1"></button>'+'	<button id="bt1" class="btn2"></button>'+'</div>'+
			'<div class="row">'+'<button id="bt2" class="btn3"></button>'+'<button id="bt3" class="btn4"></button>'+
			'</div>'+
			'<div class="inner">'+
			'<div class="ledContainer">'+
			'<h1 class="h1text">Simon<span class="trademark">&#174</span></h1>'+
			'</div>'+
			'<div class="displayButtons">'+
			'<div class="tx">'+
			'<button id="ledtext" class="led" disabled="true">--</button>'+
			'</div>'+
			'<div class="st">'+
			'<div id="startB" class="startButton"></div>'+
			'</div>'+
			'<div class="strictMode">'+
			'<div>'+
			'<div id="strictCheckerB" class="strictChecker"></div>'+
			'<div id="strictB" class="strictButton" ></div>'+
			'</div>'+'</div>'+'</div>'+
			'<div class="labels">'+
			'<div class="lb1">'+
			'<h5 class="lb21">COUNT</h5>'+
			'</div>'+
			'<div class="lb1">'+
			'<h5 class="lb22">START</h5>'+
			'</div>'+
			'<div class="lb1">'+
			'<h5 class="lb23">STRICT</h5>'+
			'</div>'+'</div>'+
			'<div class="switchContainer">'+
			'<div class="Off">OFF</div>'+
			'<div class="switchPara"><div id="sOnOff" class="switchOnOff"></button></div></div>'+
			'<div class="Off">ON</div>'+
			'</div></div></div></div>';

		document.body.insertAdjacentHTML('afterbegin',tempHtml);
	});






	it('should return undefined',function(){
		expect(Game.prototype.initialize()).toBe(undefined);
	});

	it('should return true',function(){
		document.getElementById('strictB').click();
		expect(Game.prototype.toggleStrictMode()).toBe(1);
		expect(Game.prototype.toggleStrictMode()).toBe(0);
	});
	it('should return undefined',function(){
		expect(Game.prototype.start()).toBe(undefined);
	});
	it('should return undefined',function(){
		setTimeout(function(){
			expect(Game.prototype.showExclamations()).toBe(undefined);
			done();
		},1000);
	});
	it('should return undefined',function(){
		expect(Game.prototype.disableControl(true)).toBe(undefined);
	});
	it('should return undefined',function(){
		expect(Game.prototype.startSequence(0)).toBe(undefined);
		expect(Game.prototype.startSequence(1)).toBe(undefined);
		expect(Game.prototype.startSequence(2)).toBe(undefined);
	});
	it('should return undefined',function(){
		expect(Game.prototype.waitForUser()).toBe(undefined);
	});
	it('should return undefined',function(){
		expect(Game.prototype.switchGame()).toBe(undefined);
		expect(Game.prototype.switchGame()).toBe(undefined);
	});
});
