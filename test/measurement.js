
var chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
chai.should();
const fs = require('fs');
chai.use(chaiHttp);

var jsondata = fs.readFileSync('/home/admin1/quantityMeasurementAPI/test/json/jsonMeasurement.json')

var finalJsonData = JSON.parse(jsondata);
console.log("jsonfile---->", finalJsonData)

describe('Quantity Measurement Test Cases', () => {

    it('given type length with input 1 and unit1 feet should return in inches', (done) => {
        chai.request(server)
            .post('/quatitymeasurement')
            .send(finalJsonData.input)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('object');
                done();
            });
    });

    it('given null type with null input with null unites should return status code 500', (done) => {
        chai.request(server)
            .post('/quatitymeasurement')
            .send(finalJsonData.nullInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });


    it('given empty type with empty input with empty unites should return status code 500', (done) => {
        chai.request(server)
            .post('/quatitymeasurement')
            .send(finalJsonData.emptyInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });

    it('given type with string input with unites should return status code 500', (done) => {
        chai.request(server)
            .post('/quatitymeasurement')
            .send(finalJsonData.stringInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });


    it('given type with input with wrong unites should return status code 500', (done) => {
        chai.request(server)
            .post('/quatitymeasurement')
            .send(finalJsonData.wroungUnit)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });


})

describe('Test Cases for second api type', () => {

    it('givencorrect type should return status code 200', (done) => {
        chai.request(server)
            .get('/gettype')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('given type with input with wrong unites should return status code 404', (done) => {
        chai.request(server)
            .post('/gettype')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });


})

describe('Test Cases for third api to get unites of type', () => {
    it('given correct type should return status code 200', (done) => {
        chai.request(server)
            .post('/getunits')
            .send(finalJsonData.correctType)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });

    it('given incorrect type should return status code 200', (done) => {
        chai.request(server)
            .post('/getunits')
            .send(finalJsonData.inCorrectType)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });

    });

})