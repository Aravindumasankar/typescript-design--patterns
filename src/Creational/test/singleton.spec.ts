const databaseTest = require('../singleton');
var expect = require('chai').expect;

describe('Singleton Design Pattern Tests', function() {
	it('should instantiate only one instance', function() {
		const mongo = new databaseTest('mongo');
		const mysql = new databaseTest('mysql');

		expect(mongo.getData()).to.equal('mongo');
		expect(mysql.getData()).to.equal('mongo');
		expect(mongo).to.equal(mysql);
	});
});
