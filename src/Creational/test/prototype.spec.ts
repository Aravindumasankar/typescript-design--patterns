const carTest = require('../prototype');
var expect = require('chai').expect;
describe('Prototype Design Pattern Tests', function() {
	it('should create an object with prototype', function() {
		const myCar = Object.create(carTest, { owner: { value: 'John' } });

		expect(myCar.noOfWheels).to.equal(4);
		expect(myCar.start()).to.equal('started');
		expect(myCar.stop()).to.equal('stopped');
		expect(myCar.owner).to.equal('John');
		expect(myCar.__proto__).to.equal(carTest);
	});
});