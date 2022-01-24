const {
    create,
    deleteUser,
    updateProduct,
    add,
    getListProduct,
    getListUser,
    updateAccount,
    deleteProduct,
    login
} = require('./user.service');



// const { genSaltSync, hashSync, compareSync } = require('base64');


// const { base64encode, base64decode } = require('nodejs-base64');
// var base64 = require('base-64');
// var utf8 = require('utf8');


// var bytes = utf8.base64encode(text);
// var encoded = base64.encode(bytes);
// const { sign } = require('jsonwebtoken');



// console.log(encodedStringBtoA);

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        // const salt = genSaltSync(10);
        let decodedStringBtoA = body.password;

        // Encode the String
        let encodedStringBtoA = btoa(decodedStringBtoA);
        body.password = encodedStringBtoA;
        create(body, () => {

            return res.status(200).json({
                message: 'Data Berhasil disimpan'
            });
        });
    },
    getListUser: (req, res) => {
        getListUser((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results

            });

        });
    },
    updateAccount: (req, res) => {
        const body = req.body;
        updateAccount(body, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }

            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Failed to Update User'
                });
            };
            return res.json({
                success: 1,
                message: 'update successfully'
            });
        });

    },

    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, () => {

            return res.json({
                message: 'User Deleted Successfully'
            });
        });

    },

    createProduct: (req, res) => {
        const body = req.body;
        add(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database Connection Error'
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    updateProduct: (req, res) => {
        const body = req.body;
        updateProduct(body, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }

            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Failed to Update User'
                });
            };
            return res.json({
                success: 1,
                message: 'update successfully'
            });
        });

    },

    getListProduct: (req, res) => {
        getListProduct((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results

            });

        });
    },
    deleteProduct: (req, res) => {
        const data = req.body;
        deleteProduct(data, () => {

            return res.json({
                message: 'Product Deleted Successfully'
            });
        });

    },

        login: (req, res, next) => {
            login((err, results) => {
                const authHeader = req.headers.authorization;
                const auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
                const username = auth[0];
                const password = auth[1];

                if (!authHeader) {
                    const err = new Error('You are not authenticated');
                    return res.json({
                        success: 1,
                        data: results
                    });
                } else {
                    err.status = 401;
                    return next(err);
                }

                if (username === 'username' && password === 'password') {
                    next();
                }
                else {
                    var err = new Error('You are not authenticated');
                    return res.json({
                        success: 1,
                        data: results
                    });
                    err.status = 401;
                    return next(err);
                }

            });
        }

    };