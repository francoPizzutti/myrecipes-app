import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);


mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      authSource: 'admin', 
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
      dbName: 'recipes'
});

app.listen(3001, () => console.log('sv started')); 