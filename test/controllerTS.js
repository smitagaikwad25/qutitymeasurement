const sinon = require('sinon');
const chai = require('chai')
const services = require('../main/service/service')
const controller = require('../main/controller/contoller')
const model = require('../main/models/model')

req = {
    "FEET": "1"
}

res = {
    send: function () { }
}

describe('contoller test using sinon',() =>{
beforeEach( () => {
    sinon.stub(services,'compares').yields(null,"hello")
})

it('checking',()=>{
    let mock = sinon.mock(res);
     mock.expects('send').once().withExactArgs("hello")
    controller. convert(req,res);
    mock.verify()
});


})