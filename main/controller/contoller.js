
const services = require('../service/service');

module.exports = {
    convert(req, res) {
        try {

            req.checkBody('type').isUppercase().isAlpha().exists();
            req.checkBody('unit1').isAlpha().exists();
            req.checkBody('input').isNumeric();
            req.checkBody('unit2').isAlpha().exists();


            const error = req.validationErrors();
            const response = {};

            if (error) {
                response.success = false;
                response.message = 'enter valid details';
                response.error = error;
                return res.status(500).send(response);
            } else {
                var obj = {
                    type: req.body.type,
                    unit1: req.body.unit1,
                    input: req.body.input,
                    unit2: req.body.unit2
                }
                const response = {};
                services.compares(obj, (err, data) => {
                    if (err) {
                        response.success = false;
                        response.message = 'erro occurr';
                        response.err = err;
                        return res.status(500).send(response);
                    } else {
                        response.data = data
                        response.success = true;
                        response.message = 'successfully done'
                        return res.status(200).send(response);
                    }
                });
            }
        } catch (err) {
            res.status(500).send({ message: "erro occure" })
        }
    },


    getTypes(req, res) {

        const response = {};
        try {
            services.getType(req, (err, data) => {
                if (err) {
                    response.success = false;
                    response.message = 'erro occurr';
                    response.err = err;
                    return res.status(500).send(response);
                } else {
                    response.data = data
                    response.success = true;
                    response.message = 'successfully done'
                    return res.status(200).send(response);
                }
            })

        } catch (err) {
            res.status(500).send({ message: "erro occure" })
        }
    },


    getunits(req, res) {

        try {
            req.checkBody('type').isUppercase().isAlpha().exists();

            const error = req.validationErrors();
            let response = {}

            if (error) {
                response.success = false;
                response.message = 'enter valid details';
                response.error = error;
                return res.status(500).send(response);
            } else {

                var obj = {
                    type: req.body.type,
                }
                services.getunit(obj, (err, data) => {
                    if (err) {
                        response.success = false;
                        response.message = 'erro occurr';
                        response.err = err;
                        return res.status(500).send(response);
                    } else {
                        response.data = data
                        response.success = true;
                        response.message = 'successfully done'
                        return res.status(200).send(response);
                    }
                })
            }
        } catch (err) {
            res.status(500).send({ message: "erro occure" })
        }
    },



}




