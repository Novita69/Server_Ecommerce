
const {
    createUser,
    getListUser,
    updateAccount,
    deleteUser,
    createProduct,
    updateProduct,
    getListProduct,
    deleteProduct

} = require('./user.controller');

const router = require('express').Router();


router.post('/createUser', createUser);
router.get('/showListUser', getListUser);
router.put('/updateAccount', updateAccount);
router.delete('/deleteUser', deleteUser);
router.post('/addProduct', createProduct);
router.put('/updateProduct', updateProduct);
router.get('/showListProduct', getListProduct);
router.delete('/deleteProduct', deleteProduct);


module.exports = router;