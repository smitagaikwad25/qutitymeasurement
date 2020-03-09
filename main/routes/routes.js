module.exports = (app) => {
    const controller = require('../controller/contoller');
    app.post('/quatitymeasurement', controller.convert)
    app.get('/gettype', controller.getTypes)
    app.post('/getunits', controller.getunits)
}