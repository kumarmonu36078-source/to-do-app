import 'dotenv/config'; // Ye line sabse pehli honi chahiye
// ... baaki ka code
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/products', productRoute);

// Server Listen
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});