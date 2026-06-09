import mongoose from 'mongoose'
export const connectDB = async () =>{
const url = process.env.MOGO_DB_URL
await mongoose.connect(url)
}