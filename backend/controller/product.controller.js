import { product } from '../model/product.schema.js';

// CREATE PRODUCT
export const createNewProduct = async (req, res) => {
    try {
        const data = req.body;
        const newProduct = await product.create(data);
        res.status(201).json({
            message: "Product created successfully",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};

// GET ALL PRODUCTS (Ye wala update karein)
export const getAllProduct = async (req, res) => {
    try {
        // Database se saara data nikal rahe hain
        const allProducts = await product.find(); 
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

// GET PRODUCT BY ID
export const getProductById = async (req, res) => {
    try {
        const singleProduct = await product.findById(req.params.id);
        res.status(200).json(singleProduct);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};