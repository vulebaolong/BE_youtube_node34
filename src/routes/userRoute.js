import express from "express";
import { updateAvatar, updateUser, userLogin, userLoginFacebook, userSignUp } from "../controllers/userController.js";
import multer, { diskStorage } from "multer";

const userRoute = express.Router();

const update = multer({
    storage: diskStorage({
        destination: process.cwd() + "/public/img",
        filename: (req, file, cb) => {
            const newName = new Date().getTime() + "_" + file.originalname;
            cb("null", newName);
        },
    }),
});

// đăng ký
userRoute.post("/sign-up", userSignUp);

// đăng nhập
userRoute.post("/login", userLogin);

// đăng nhập facebook
userRoute.post("/login-facebook", userLoginFacebook);

// update user
userRoute.put("/update-user", updateUser);

// update avatar
userRoute.put("/update-avatar", update.single(), updateAvatar);

export default userRoute;
