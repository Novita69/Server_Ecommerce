const {
    create,
    deleteUser
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

    }
};