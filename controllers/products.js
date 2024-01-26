//! Controllers

const getAllProducts = async (req, res)=> {
    res.status(200).json({msg: "get All Products"})
}

const getAllProductsTesting = async (req, res)=> {
    res.status(200).json({msg: "get All Products Testing"})
}


// Export the controllers 
// To use the controllers, import from routes
module.exports = { getAllProducts, getAllProductsTesting }