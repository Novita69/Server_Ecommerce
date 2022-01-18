const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db-ecommerce"
});

//connect to MySQL
db.connect(err => {
    if (err) {
        throw err
    }

    console.log('MySQL Connected')
});


app.use(express.json());

//Menampilkan isi Table
// app.get('/showTabelMerchant', (req, res) => {
//     let sql = select * from`merchant_profile`;
//     db.query(sql, err => {
//         if (err) {
//             throw err
//         }
//         res.send(sql);
//     });
// });

// buat construktor
const Merchant = function (merchant_profile) {
    this.id_user = merchant_profilet.id_user;
    this.password = merchant_profile.password;
    this.email = merchant_profile.email;
    this.username = merchant_profile.username;
    this.address = merchant_profile.address;
    this.join_date = merchant_profile.join_date;
    this.phone_number = merchant_profile.phone_number;
    this.id_product = merchant_profile.id_product;
};

app.get('/showTabelMerchant', (req, res) => {
    // let sql = select * from`merchant_profile`;
    // db.query(sql, err => {
    //     if (err) {
    //         throw err
    //     }
    //     res.send(sql);
    // });

    sql.query("SELECT * FROM merchant_profile", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("merchant_profile: ", res);
        result(null, res);
    });

    res.send(sql);
});

// Merchant.getAll = result => {
//     sql.query("SELECT * FROM merchant_profile", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }

//         console.log("merchant_profile: ", res);
//         result(null, res);
//     });
// };

// app.get("/showTabelMerchant", merchant_profile.findAll);

//Insert to tabel Merchant Profile
// app.get('/merchant', (req, res) => {
//     let post = { name: 'Novita', designation: 'Fullstuck Developer' }
//     let sql = 'INSERT  INTO employee SET ?'
//     let query = db.query(sql, post, err => {
//         if (err) {
//             throw err
//         }
//         res.send('Employee added')
//     });
// });

// function yang merespon request dari frontend untuk  ditampilkan ke postman / menampilkan hasil data yang telah dari backend
// app.get('/api/todos', function (req, res) {
//     res.send(todolistData)
// })

app.listen(3000, () => {
    console.log('Server Started on Port 3000');
});
