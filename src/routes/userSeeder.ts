import express, {Request, Response, Router} from 'express';
import User from '../models/userModel';
import userData from '../userData';
const userSeeder:Router = express.Router();

userSeeder.get('/', async (req: Request, res: Response) => {
  const user = await User.insertMany(userData);
  res.send(user);
})


export default userSeeder;