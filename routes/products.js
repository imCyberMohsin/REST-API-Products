//! Routes
const express = require('express')
const router = express.Router()

//? Import Controllers
const { getAllProducts, getAllProductsTesting } = require('../controllers/products') 

//? Using Controllers 
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;