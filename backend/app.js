import express from 'express'
const app = express();
import 'dotenv/config'
import productRoute from './routes/product.routes.js'
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';


const port = process.env.PORT || 5000; 
connectDB().catch((e)=>console.log("Error in connecton ",e));

app.use(bodyParser.json())
app.use('/products',productRoute)


app.listen(port, ()=>{
console.log(`this is my server port ${port}`)
})