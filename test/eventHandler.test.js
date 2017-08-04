
describe('eventHandler',function(){
	it('checks listeners',function(){
		expect(button0Call(1)).toBe(undefined);
		expect(button1Call(1)).toBe(undefined);
		expect(button2Call(1)).toBe(undefined);
		expect(button3Call(1)).toBe(undefined);
		expect(startBCall(1)).toBe(undefined);
		expect(strictBCall(1)).toBe(undefined);
		expect(sOnOffCall(1)).toBe(undefined);
		
		expect(button0Call()).toBe(undefined);
		expect(button1Call()).toBe(undefined);
		expect(button2Call()).toBe(undefined);
		expect(button3Call()).toBe(undefined);
		expect(startBCall()).toBe(undefined);
		expect(strictBCall()).toBe(undefined);
		expect(sOnOffCall()).toBe(undefined);
	});
});