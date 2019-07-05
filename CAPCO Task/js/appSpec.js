describe('Testing the API Request, this is the checklist', ()=>{
    it('should accept API request if success', ()=>{
      //...
    })
    it('should display error if API request is not success', ()=>{
        //...
      })
  })

describe('Testing the functionality, this is the checklist', ()=>{
    it('should check that currency code is defined as EUR', ()=>{
        from.forEach(currencyCode =>{
            expect(currencyCode.rates).toBeDefined();
            expect(currencyCode.rates.length).not.toBe('');
          });
    })
    it('should populate dropdown with country codes', ()=>{
        //...
      })
    it('should swap currency values', ()=>{
      //...
    })
    it('should update calculated value after swap', ()=>{
        //...
      })
  })
  
//example I found on gitHub https://gist.github.com/vladimirze/960d8c721455333a154fa1f73b412d51
const request = require('request');
const server = require('../server');

const endpoint = 'http://localhost:3000/people';

describe('people', function () {
    it('should return 200 response code', function (done) {
        request.get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('should fail on POST', function (done) {
        request.post(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(404);
            done();
        });
    });
});