
describe('gameObject',function(){
	it('should return undefined',function(){
		jasmine.clock().uninstall();
		jasmine.clock().install();
		GameObject.prototype.createFlash(new GameObject(0,"#00BA47","#89ed91"));
		jasmine.clock().tick(11300);
		expect(GameObject.prototype.createFlash(new GameObject(0,"#00BA47","#89ed91"))).toBe(undefined);
		jasmine.clock().uninstall();
	});
	it('executes the check function',function(){
		var maxArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var midArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,0)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,1,1)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,0,1)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(1,"#A50000","#ef8686"),maxArray,1,1)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,18)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,19)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),midArray,18)).toBe(undefined);
	});
	it('should run showExclamation',function(){
		var maxArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var midArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,1,1)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(0,"#00BA47","#89ed91"),maxArray,0,1)).toBe(undefined);
		expect(GameObject.prototype.check(new GameObject(1,"#A50000","#ef8686"),maxArray,1,1)).toBe(undefined);
	});
});