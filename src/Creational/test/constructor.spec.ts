const heroTest = require('../constructor');
var expect = require('chai').expect;

describe('Constructor Design Pattern Tests', function() {
	it('should instantiate and the method call must work', function() {
		const IronMan = new heroTest('Iron Man', 'fly');

		expect(IronMan.getDetails()).to.equal('Iron Man can fly');
	});
});