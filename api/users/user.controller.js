const {
    create,
    deleteUser,
    updateProduct,
    add,
    getListProduct,
    deleteProduct
} = require('./user.service');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        // body.password = body.password;
        create(body, () => {

            return res.status(200).json({
                message: 'Data Berhasil disimpan'
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
        // body.password = body.password;
        // add(body, () => {

        //     return res.status(200).json({
        //         message: 'Data Berhasil disimpan'
        //     });
        // });

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

    }



};