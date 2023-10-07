// yarn add jsonwebtoken
import jwt from "jsonwebtoken";

// mã hóa data
const createToken = (data) => {
    // tạo ra token
    let token = jwt.sign({ data }, "BIMAT", { algorithm: "HS256", expiresIn: "5m" }); // HS256, ES256

    return token;
};

// kiểm tra token
const checkToken = (token) => {};

// giải mã token
const decodeToken = (token) => {
    return jwt.decode(token);
};

export { createToken, checkToken, decodeToken };
