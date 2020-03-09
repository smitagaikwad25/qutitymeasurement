module.exports = {
    getUnitValues() {
        var unitTypes = {
            "LENGTH": {
                "FEET": 12,
                "INCH": 1,
                "YARD": 36,
                "CENTIMETER": 0.393700787,
            },
            "MASS": {
                "ML": 0.001,
                "KG": 1.0,
                "GRAMS": 0.001,
                "TONNE": 1000.0,
                "GALLON": 3.78,
            },
            "VOLUM": {
                "LITRE": 1.0,
                "ML": 0.001,
            },
            "Temp": {
                "FAHRENHEIT": 2.12,
                "CELSIUS": 1,
            }
        }
        return unitTypes;
    }
}

