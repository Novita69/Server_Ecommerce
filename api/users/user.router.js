
const {
    createUser,
    getListUser,
    updateAccount,
    deleteUser,
    createProduct,
    updateProduct,
    getListProduct,
    deleteProduct
    // login

} = require('./user.controller');

function auth(req, res, next) {
    console.log(req.headers);
    var authHeader = req.headers.authorization;

    if (!authHeader) {
        var err = new Error('You are not authenticated');
        res.setHeader('WWW-Authenticated', 'Basic');
        err.status = 401;
        return next(err);

    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var username = auth[0];
    var password = auth[1];

    if (username === 'admin' && password === 'password') {
        next();
    }
    else {
        var err = new Error('You are not authenticated');
        res.setHeader('WWW-Authenticated', 'Basic');
        err.status = 401;
        return next(err);
    }
}



const router = require('express').Router();

// const { checkAuth } = require('../app.js');


router.post('/createUser', auth, createUser);
router.get('/showListUser', getListUser);
router.put('/updateAccount', updateAccount);
router.delete('/deleteUser', deleteUser);
router.post('/addProduct', createProduct);
router.put('/updateProduct', updateProduct);
router.get('/showListProduct', getListProduct);
router.delete('/deleteProduct', deleteProduct);
// router.post('/login', login);

module.exports = router;