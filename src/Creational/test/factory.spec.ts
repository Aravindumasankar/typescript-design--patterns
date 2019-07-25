const ballFactoryTest = require('../factory');
var expect = require('chai').expect;

describe('Factory Design Pattern Tests', function() {
	it('should create Basketball object', function() {
		const factory = new ballFactoryTest();

		const ball = factory.createBall('basketball');

		expect(ball.constructor.name).to.equal('Basketball');
		expect(ball.roll()).to.equal('The basketball is rolling.');
		expect(ball.bounce()).to.equal('You bounced the basketball.');
	});

	it('should create Football object if passed soccer', function() {
		const factory = new ballFactoryTest();

		const ball = factory.createBall('soccer');

		expect(ball.constructor.name).to.equal('Football');
		expect(ball.roll()).to.equal('The football is rolling.');
		expect(ball.kick()).to.equal('You kicked the football.');
	});

	it('should create Football object if passed football', function() {
		const factory = new ballFactoryTest();

		const ball = factory.createBall('football');

		expect(ball.constructor.name).to.equal('Football');
		expect(ball.roll()).to.equal('The football is rolling.');
		expect(ball.kick()).to.equal('You kicked the football.');
	});
});
