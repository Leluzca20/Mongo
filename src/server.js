import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import itemsRouter from './routes/items.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use('/api/items', itemsRouter);

app.get('/', (req, res) => res.send('Mongo API up'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
