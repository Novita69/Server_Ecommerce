const pool = require('../../config/database');

module.exports = {

    //Register Account Merchant

    create: (data, callBack) => {
        pool.query(
            `insert into merchantProfile(password, username, address, join_date, phone_number)
            values(?,?,?,?,?)`,
            [
                data.password,
                data.username,
                data.address,
                data.join_date,
                data.phone_number
            ],

            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },

    //Show List User

    getListUser: callBack => {
        pool.query(
            `select merchant_id, password, username, address, join_date, phone_number from merchantProfile`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    //Update Account

    updateAccount: (data, callBack) => {
        pool.query(
            `update merchantProfile set password=?, username=?, address=?, join_date=?, phone_number=? where merchant_id=?`,
            [
                data.password,
                data.username,
                data.address,
                data.join_date,
                data.phone_number,
                data.merchant_id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    //Remove Account Merchant

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
    },

    //Add Product 
    add: (data, callBack) => {
        pool.query(
            `insert into product(name_product, quantity, price)
        values(?,?,?)`,
            [
                data.name_product,
                data.quantity,
                data.price
            ],

            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },

    updateProduct: (data, callBack) => {
        pool.query(
            `update product set name_product=?, quantity=?, price=? where id_product = ?`,
            [
                data.name_product,
                data.quantity,
                data.price,
                data.id_product
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    //Show To List Product
    getListProduct: callBack => {
        pool.query(
            `select id_product, name_product, quantity, price from product`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    //Delete Product

    deleteProduct: (data, callBack) => {
        pool.query(
            `delete from product where id_product = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    // getUserByUsername: (username, callBack) => {
    //     pool.query(
    //         `select * from merchantProfile where username = ?`,
    //         [username],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results[0]);
    //         }
    //     );
    // },

    login: (username, password, callBack) => {
        pool.query(
            `select * from merchantProfile where username = ? and password = ?`,
            [username, password],
            (error, results, fields) => {
                if(error ){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};