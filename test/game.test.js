
describe('game',function(){

	beforeAll(function(){
		var tempHtml='<div id="container" position="relative" >'+
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
			'</div></div></div></div>'+
			'<audio id="soundbutton0">'+
			'<source src="../assets/audio/simonSound0.ogg" type="audio/ogg">'+
			'<source src="../assets/audio/simonSound0.mp3" type="audio/mp3">'+
			'</audio>'+
			'<audio id="soundbutton1">'+
			'<source src="../assets/audio/simonSound1.ogg" type="audio/ogg">'+
			'<source src="../assets/audio/simonSound1.mp3" type="audio/mp3">'+
			'</audio>'+
			'<audio id="soundbutton2">'+
			'<source src="../assets/audio/simonSound3.ogg" type="audio/ogg">'+
			'<source src="../assets/audio/simonSound3.mp3" type="audio/mp3">'+
			'</audio>'+
			'<audio id="soundbutton3">'+
			'<source src="../assets/audio/simonSound3.ogg" type="audio/ogg">'+
			'<source src="../assets/audio/simonSound3.mp3" type="audio/mp3">'+
			'</audio>'+
			'<audio id="soundbuttonWrong">'+
			'<source src="../assets/audio/buzz_sound.ogg" type="audio/ogg">'+
			'<source src="../assets/audio/buzz_sound.mp3" type="audio/mp3">'+
			'</audio>';

		document.body.insertAdjacentHTML('afterbegin',tempHtml);
	});


	it('calls reset to make a testing environment',function(){
		expect(Game.prototype.reset(1,0,[0,1,2,3],4,0,[],[],0)).toEqual([1,0,[0,1,2,3],4,0,[],[],0]);
	});
	
	it('calls initialize',function(){
		expect(Game.prototype.initialize()).toEqual([[],0,0]);
	});

	it('checks if strict mode is working',function(){
		expect(Game.prototype.toggleStrictMode(0)).toEqual([1,'strictChecker active']);
		expect(Game.prototype.toggleStrictMode(1)).toEqual([0,'strictChecker']);
	});

	it('checks if start is working',function(){
		expect(Game.prototype.start()).toBe(undefined);
	});

	it('executes clearTimers',function(){
		expect(Game.prototype.clearTimers(1)).toBe(undefined);
	});


	it('executes switchGame',function(){
		jasmine.clock().uninstall();
		jasmine.clock().install();
		Game.prototype.switchGame(1,1);
		Game.prototype.switchGame(0,1);
		jasmine.clock().tick(310);
		expect(Game.prototype.switchGame(1,1)).toEqual([0, '--', 'rgb(99, 19, 19)', 'switchOnOff']);
		expect(Game.prototype.switchGame(0,1)).toEqual([1, '--', 'rgb(234, 7, 7)', 'switchOnOff move']);
		jasmine.clock().uninstall();
	});

	it('executes showExclamation',function(){
		jasmine.clock().uninstall();
		jasmine.clock().install();
		Game.prototype.showExclamation('--',0);
		Game.prototype.showExclamation('',10);
		Game.prototype.showExclamation('------------',10);
		jasmine.clock().tick(702);
		expect(Game.prototype.showExclamation('--',0)).toEqual(undefined);
		expect(Game.prototype.showExclamation('',10)).toEqual('Incorrect arg');
		expect(Game.prototype.showExclamation('------------',10)).toEqual('Incorrect arg');
		jasmine.clock().uninstall();
	});


	it('checks startSequence',function(){
		Game.prototype.initialize();
		expect(Game.prototype.startSequence(0)).toEqual([1,1]);
		expect(Game.prototype.startSequence(1)).toEqual([1,1]);
		Game.prototype.initialize();
		expect(Game.prototype.startSequence(2)).toEqual([0,0]);
	});


	it('checks display',function(){
		expect(Game.prototype.display(10)).toBe(undefined);
		expect(Game.prototype.display(200)).toEqual('Incorrect arg');
		expect(Game.prototype.display(-200)).toEqual('Incorrect arg');
	});

	it('checks displayHelper',function(){
		jasmine.clock().uninstall();
		jasmine.clock().install();
		Game.prototype.displayHelper(0,0,600);
		Game.prototype.displayHelper(0,1,700);
		Game.prototype.displayHelper(0,2,800);
		Game.prototype.displayHelper(0,3,900);
		Game.prototype.displayHelper(-1,20,900);
		Game.prototype.displayHelper(0,1,950,1);
		jasmine.clock().tick(11605);
		expect(Game.prototype.displayHelper(0,0,600)).toBe(undefined);
		expect(Game.prototype.displayHelper(0,1,600)).toBe(undefined);
		expect(Game.prototype.displayHelper(0,2,600)).toBe(undefined);
		expect(Game.prototype.displayHelper(0,3,600)).toBe(undefined);
		expect(Game.prototype.displayHelper(-1,20,900)).toBe('Incorrect arg');
		expect(Game.prototype.displayHelper(0,1,950,1)).toBe(undefined);
		jasmine.clock().uninstall();
	});

	it('causes waitForUser to be called asynchronously',function(){
		jasmine.clock().uninstall();
		jasmine.clock().install();
		Game.prototype.waitForUser();
		jasmine.clock().tick(10001);
		expect(Game.prototype.waitForUser()).toBe(undefined);
		jasmine.clock().uninstall();
	});
});
