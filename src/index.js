import express from 'express';

const app = express();
app.use(express.json()) // hàm chèn middle ware trước khi FE truyền request tới BE
app.use(express.static("./public/img")) // định vị đường dẫn để tải tài nguyên từ BE

// chặn thông qua domain của FE
import cors from 'cors';
app.use(cors())

app.listen(8080); // => khởi tạo server BE nodejs với port tự động 
import rootRoute from './routes/rootRoute.js';
app.use(rootRoute);

// localhost:8080/video/get-video
