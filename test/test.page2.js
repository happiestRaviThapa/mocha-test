var expect = require('chai').expect;
var request = require('request');
var utils = require('../app/utility');
var convertor = require('../app/convert');

describe('Test2 Mocha utils', () => {
	describe('To GRB', () => {
		it('conver to RGB', () => {
			var redHex   = convertor.rgbToHex(255, 0, 0);
			expect(redHex).to.equal('ff0000');
		});
	});


	describe('Test2 check page status', () => {
		it('check 200', (done) =>{

			request('http://localhost:8090/', function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				done();
			});
		});
	});

	

	describe('Test2 check Array Convert', () =>{
		describe('valid Array', () => {
			it('valid one', () => {
				var arr = utils.ToArray( {a:1, b:2, c:3, d:4} );
				expect( Array.isArray(arr)). to. equal(true);
			});

			
		});
	});



});