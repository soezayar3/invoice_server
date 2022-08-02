import ProductModel from "./ProductModel.js";

export const getProducts = async (req, res) => {
    const { search } = req.query;
    try {
        const name = new RegExp(search, "i");
        const products = await ProductModel.find({ name: { $regex: name } });
        res.json({ data: products });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
