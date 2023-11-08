import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/User.js';

const router = express.Router();

router.post('/register', async(request, response) => {
    const { username, password } = request.body;

    const user = await UserModel.findOne({
        username: username
    });

    response.json(user);
});


export { router as userRouter };