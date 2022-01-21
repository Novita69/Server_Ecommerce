
const {
    createUser,
    deleteUser,
    createProduct,
    updateProduct,
    getListProduct,
    deleteProduct

} = require('./user.controller');

const router = require('express').Router();


router.post('/createUser', createUser);
router.delete('/deleteUser', deleteUser);
router.post('/addProduct', createProduct);
router.put('/updateProduct', updateProduct);
router.get('/showListProduct', getListProduct);
router.delete('/deleteProduct', deleteProduct);


module.exports = router;