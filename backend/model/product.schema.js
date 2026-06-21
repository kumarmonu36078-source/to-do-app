import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
    title:String,
    "slug":String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
      rate:Number,
      count:Number,
    }

 })

export const product = mongoose.model('product',productSchema);
