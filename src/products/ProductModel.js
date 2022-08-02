import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    picture: String,
    price: Number,
    stock: Number,
});

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;
