/*
 * File : /Users/jayan/Development/Projects/node/jcart/helpers/product-helpers.js
 * Created Date: Sunday, February 13th 2022, 4:38:42 pm
 * Author: Jayan Varma
 * Author Email : jayantsr@gmail.com
 * -----
 * Last Modified: Sunday February 13th 2022 4:38:42 pm
 * -----
 * Copyright (c) 2022 Cylogics.io
 *
 */

const async = require('hbs/lib/async');
var db = require('../config/connection');

module.exports = {
    addProduct: (product, callback) => {
        db.get()
            .collection('product')
            .insertOne(product)
            .then(data => {
                console.log(data);
                callback(product._id);
            });
    },

    getAllProducts: () => {
        return new Promise(async(resolve, reject) => {
            let products = await db.get().collection('product').find().toArray();
            resolve(products);
        });
    },
};