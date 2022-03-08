var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    productHelpers.getAllProducts().then(products => {
        res.render('admin/view-products', { admin: true, products });
    });
});
router.get('/products', function(req, res, next) {
    productHelpers.getAllProducts().then(products => {
        res.render('admin/view-products', { admin: true, products });
    });
});

router.get('/add-products', (req, res) => {
    res.render('admin/add-products', { admin: true });
});

router.post('/addproduct', (req, res) => {
    productHelpers.addProduct(req.body, id => {
        let image = req.files.image;
        image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
            if (err) {
                console.log(err);
            } else {
                res.render('admin/add-products');
            }
        });
    });
});

module.exports = router;