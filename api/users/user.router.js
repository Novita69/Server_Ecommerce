
const {
    createUser,
    getListUser,
    updateAccount,
    deleteUser,
    createProduct,
    updateProduct,
    getListProduct,
    deleteProduct,
    login

} = require('./user.controller');

// function auth(req, res, next) {
//     console.log(req.headers);
//     var authHeader = req.headers.authorization;

//     if (!authHeader) {
//         var err = new Error('You are not authenticated');
//         res.setHeader('WWW-Authenticated', 'Basic');
//         err.status = 401;
//         return next(err);

//     }

//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var username = auth[0];
//     var password = auth[1];

//     if (username === 'admin' && password === 'password') {
//         next();
//     }
//     else {
//         var err = new Error('You are not authenticated');
//         res.setHeader('WWW-Authenticated', 'Basic');
//         err.status = 401;
//         return next(err);
//     }
// }



const router = require('express').Router();

// const { checkAuth } = require('../app.js');


router.post('/createUser', login, createUser);
router.get('/showListUser', login, getListUser);
router.put('/updateAccount',  login, updateAccount);
router.delete('/deleteUser', login, deleteUser);
router.post('/addProduct', login, createProduct);
router.put('/updateProduct', login, updateProduct);
router.get('/showListProduct', login, getListProduct);
router.delete('/deleteProduct', login,  deleteProduct);
router.post('/login', login);

module.exports = router;