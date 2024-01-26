//! REST API 
require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect'); // MongoDB Connection
// const ProductsModel = require('./models/product');  // Products Schema
const productRoute = require('./routes/products'); // Require Routes

//? Home
app.get('/', (req, res)=> {
    res.send('Home')
}) 

//? Middlewares and Using Routers
app.use('/api/products', productRoute);

const port = process.env.PORT || 3000;
const start = async ()=> {
    try{
        await connectDB();
        console.log("Connected To DB");
        app.listen(port, ()=>{
            console.log(`Server Running On Port ${port}`);
        });
    } catch(err){
        console.error(err);
    }
}
start();