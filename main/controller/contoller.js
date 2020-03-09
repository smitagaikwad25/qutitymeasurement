
const services = require('../service/service');

module.exports = {
    convert(req, res) {
        try {
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

        let response = {}

        var obj = {
            type: req.body.type,
        }

        try {
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

        } catch (err) {
            res.status(500).send({ message: "erro occure" })
        }
    },



}




