import express, { Router } from 'express'
import User from '../models/userModel';
import userData from '../userData';
const userSeeder:Router = express.Router();

userSeeder.get('/', async (req, res) => {
  const user = await User.insertMany(userData);
  res.send(user);
})


export default userSeeder;