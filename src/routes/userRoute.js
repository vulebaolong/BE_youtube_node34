import express from 'express';
import { userLogin, userSignUp } from '../controllers/userController.js';

const userRoute = express.Router();

// đăng ký
userRoute.post("/sign-up",userSignUp);

// đăng nhập
userRoute.post("/login",userLogin);


export default userRoute;