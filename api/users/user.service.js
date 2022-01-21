const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into merchantProfile(merchant_id, password, username, address, join_date, phone_number)
            values(?,?,?,?,?,?)`,
            [
                data.merchantid,
                data.password,
                data.username,
                data.address,
                data.joinDate,
                data.phoneNumber
            ],

            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from merchantProfile where merchant_id = ?`,
            [data.merchant_id],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};