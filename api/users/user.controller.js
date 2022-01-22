const {
    create,
    deleteUser,
    updateProduct,
    add,
    getListProduct,
    getListUser,
    updateAccount,
    getUserByUsername,
    deleteProduct
} = require('./user.service');

const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
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
    login: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: 'Invalid username or password'
                });
            }

            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({ result: results }, 'qwe1234', {
                    expiresIn: '1h'

                });

                return res.json({
                    success: 1,
                    message: 'Login Successfully',
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: 'Invalid Username or Password'
                });
            }
        });
    }


};