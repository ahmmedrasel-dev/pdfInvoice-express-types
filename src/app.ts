import express, {Request, Response, Application} from 'express';
const app: Application = express();
import { Server } from 'http';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import orderRouter from './routes/orderRouter';
import userSeeder from './routes/userSeeder';

const port = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(String(process.env.MONGODB_URL)).then(() => {
  console.log('Mongodb Connected');
}).catch((error) => {
  console.log(error);
})

// Orders Rest Api .
app.use('/api/orders', orderRouter);

// Seeding User Data to Databse.
app.use('/api/user-seed', userSeeder);

app.get('/', (req: Request, res: Response) => {
  res.send('Surver is running')
})


const server: Server= app.listen(port, () => {
  console.log(`Server is runnnig from Port: ${port}`)
})