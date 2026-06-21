// config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Yahan 'MONGO_URI' likhein
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log("Database connection error:", error);
    }
};