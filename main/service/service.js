const quantityJSON = require('../uitility/measure');
module.exports = {
    compares(obj, callback) {
        var Fr = "FAHRENHEIT"
        var temp = "TEMPERATURE"
        var c = "CELSIUS"

        var keys = Object.keys(quantityJSON.getUnitValues());

        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == obj.type) {
                if (obj.type == temp) {
                    var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])
                    for (var j = 0; j < unitKeys.length; j++) {
                        if (unitKeys[j] == Fr) {
                            console.log(unitKeys[j], Fr)
                            var finalResult = (((obj.input) - (32)) * (5 / 9))
                        }
                        if (unitKeys[j] == c) {
                            var finalResult = (((obj.input) * (9 / 5)) + (32))
                        }
                    }
                } else {
                    var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])
                    for (var j = 0; j < unitKeys.length; j++) {
                        if (unitKeys[j] == obj.unit1) {
                            var firstUnitvalue = quantityJSON.getUnitValues()[keys[i]][obj.unit1] * obj.input
                            for (var k = 0; k < unitKeys.length; k++) {
                                if (unitKeys[k] == obj.unit2) {
                                    var finalResult = firstUnitvalue / quantityJSON.getUnitValues()[keys[i]][obj.unit2]
                                }

                            }
                        }
                    }
                }
            }

        }

        return callback(null, finalResult);
    },

    getType(req, callback) {

        var keys = Object.keys(quantityJSON.getUnitValues())
        return callback(null, keys)

    },

    getunit(obj, callback) {
        var keys = Object.keys(quantityJSON.getUnitValues())
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == obj.type) {
                var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])
            }
        }
        return callback(null, unitKeys)
    }

}





