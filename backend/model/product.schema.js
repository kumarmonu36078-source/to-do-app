import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    discription:String,
 })

export const product = mongoose.model('product',productSchema);