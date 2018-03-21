var expect = require('chai').expect;
var request = require('request');
var utils = require('../app/utility');


describe('Test Mocha utils', () => {
	describe('test add', () => {
		it('do the adding', () => {
			var calc = utils.add(2 ,2);
			expect(calc).to.equal(4);
		});
	});


	describe('check page status', () => {
		it('check 200', (done) =>{

			request('http://localhost:8090/', function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				done();
			});
		});
	});

	describe('check page status', () => {
		it('check 404', (done) =>{

			request('http://localhost:8090/about/', function(err, res, body) {
				expect(res.statusCode).to.equal(404);
				done();
			});
		});
	});

	describe('check Array Convert', () =>{
		describe('valid Array', () => {
			it('valid one', () => {
				var arr = utils.ToArray( {a:1, b:2, c:3, d:4} );
				expect( Array.isArray(arr)). to. equal(true);
			});


		});
	});



});