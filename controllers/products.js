//! Controllers
const productModel = require('../models/product')

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i", };
    }

    let apiData = productModel.find(queryObject)
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // Pagination: Limiting the content on each page, also skip the content of previous page
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;              // Formula To skip
    apiData = apiData.skip(skip).limit(limit);

    const products = await apiData;
    res.status(200).json({ products });
}


// For Testing
const getAllProductsTesting = async (req, res) => {
    const products = await productModel.find(req.query);
    res.status(200).json({ products });
}


// Export the controllers 
// To use the controllers, import from routes
module.exports = { getAllProducts, getAllProductsTesting }