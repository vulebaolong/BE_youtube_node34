import express from "express";
import { updateAvatar, updateUser, userLogin, userLoginFacebook, userSignUp } from "../controllers/userController.js";
import { update } from "../controllers/uploadController.js";

const userRoute = express.Router();

// đăng ký
userRoute.post("/sign-up", userSignUp);

// đăng nhập
userRoute.post("/login", userLogin);

// đăng nhập facebook
userRoute.post("/login-facebook", userLoginFacebook);

// update user
userRoute.put("/update-user", updateUser);

// update avatar
userRoute.put("/update-avatar", update.single("file"), updateAvatar);

export default userRoute;
