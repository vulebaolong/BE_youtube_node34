import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../config/jwt.js";

let model = initModels(sequelize);

// yarn add bcrypt

const userSignUp = async (req, res) => {
    let { full_name, email, pass_word } = req.body;

    let checkEmail = await model.users.findAll({
        where: {
            email: email,
        },
    });

    if (checkEmail.length > 0) {
        res.send("Email đã tồn tại !");
        return;
    }
    let newPass = bcrypt.hashSync(pass_word, 10);

    let newData = {
        full_name,
        email,
        pass_word: newPass,
        avatar: "",
        face_app_id: "",
        role: "user",
    };
    // INSERT INTO VALUE
    await model.users.create(newData);

    res.send("Đăng ký thành công");
};
// localhost:8080/'SELECT * FROM users'

const userLogin = async (req, res) => {
    let { email, pass_word } = req.body;

    let checkEmail = await model.users.findOne({
        where: {
            email: email,
        },
    });

    if (checkEmail) {
        // check pass word
        let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);

        if (checkPass) {
            let token = createToken(checkEmail);
            res.send(token);
        } else {
            res.send("Mật khẩu không đúng !");
        }
    } else {
        res.send("Email không đúng !");
    }
};

const userLoginFacebook = async (req, res) => {
    const { face_app_id } = req.body;

    const userExist = await model.users.findOne({
        where: {
            face_app_id,
        },
    });
    // đã tồn tại => tạo token
    if (userExist) {
        let token = createToken(userExist);
        res.send(token);
    }

    // chưa tồn tại => đăng ký mới
    let newUserData = {
        full_name: "",
        email: "",
        pass_word: "",
        avatar: "",
        face_app_id,
        role: "user",
    };
    const newUser = await model.users.create(newUserData);
    let token = createToken({ newUser });
    res.send(token);
};

const updateUser = async (req, res) => {
    const { full_name, email, pass_word } = req.body;

    const { token } = req.headers;

    const infoUser = decodeToken(token);

    const user_id = infoUser.data.user_id;

    const user = await model.users.findOne({
        where: {
            user_id,
        },
    });

    if (!user) return res.send("Nguoi dung khong ton tai");

    const userUpdate = { ...user, full_name, email, pass_word };

    const result = await model.users.update(userUpdate, {
        where: {
            user_id: user.user_id,
        },
    });

    res.send(result);
};

const updateAvatar = (req,res) => { 
    res.send(updateAvatar);
 }
export { userSignUp, userLogin, userLoginFacebook, updateUser, updateAvatar };
