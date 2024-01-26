//! Load Data From JSON file to DB
// Run the Script : node productDB.js 
const connectDB = require('./db/connect');
const productModel = require('./models/product');
const productJson = require('./products.json');

const start = async () => {
    try {
        await connectDB(); // Create DB Connection
        const products = await productModel.create(productJson);
        console.log("JSON Loaded To DB");
    } catch (error) {
        console.log(error);
    }
}

start();