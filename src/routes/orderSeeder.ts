import express, {Request, Response, Router} from 'express';
import Order from '../models/orderModel';
import orderData from '../orderData';
const seedRouter: Router = express.Router();


seedRouter.get('/', async (req: Request, res: Response) => {
  const order = await Order.insertMany(orderData);
  res.send(order);
})


export default seedRouter;