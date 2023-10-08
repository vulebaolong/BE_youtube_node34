import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoute.js";
import sequelize from "./models/connect.js";

const app = express();

app.use(express.json()); // hàm chèn middle ware trước khi FE truyền request tới BE
app.use(express.static("./public/img")); // định vị đường dẫn để tải tài nguyên từ BE
app.use(cors());// chặn thông qua domain của FE

app.use(rootRoute);

const port = 8080
const server = app.listen(port, async () => {
    console.log(`Lắng nghe cổng http://localhost:${port} ...`);
    try {
        const { database } = sequelize.config;
        console.log(`Kết nối database: ${database} thành công.`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
