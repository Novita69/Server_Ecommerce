
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

const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');


router.post('/createUser', checkToken, createUser);
router.get('/showListUser', checkToken, getListUser);
router.put('/updateAccount', checkToken, updateAccount);
router.delete('/deleteUser', deleteUser);
router.post('/addProduct', createProduct);
router.put('/updateProduct', updateProduct);
router.get('/showListProduct', getListProduct);
router.delete('/deleteProduct', deleteProduct);
router.post('/login', login);

module.exports = router;