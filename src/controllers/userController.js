import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from 'bcrypt';
import { createToken } from "../config/jwt.js";

let model = initModels(sequelize);

// yarn add bcrypt

const userSignUp = async (req, res) => {

    let { full_name, email, pass_word } = req.body;

    let checkEmail = await model.users.findAll({
        where: {
            email: email
        }
    })

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
        role: "user"
    };
    // INSERT INTO VALUE
    await model.users.create(newData);

    res.send("Đăng ký thành công");

}
// localhost:8080/'SELECT * FROM users'

const userLogin = async (req, res) => {
    let { email, pass_word } = req.body;

    let checkEmail = await model.users.findOne({
        where: {
            email: email
        }
    })

    if (checkEmail) {
        // check pass word
        let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);

        if (checkPass) {
            let token = createToken({ checkEmail, pass_word: "" });
            res.send(token);
        } else {
            res.send("Mật khẩu không đúng !");

        }
    } else {
        res.send("Email không đúng !");
    }
}

export {
    userSignUp,
    userLogin
}