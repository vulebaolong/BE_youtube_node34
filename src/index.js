import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";

app.use(cors());

app.listen(8080);

app.get("/demo", (req, res) => {
    return res.status(200).json("OKE");
});

import rootRoute from "./routes/rootRoute.js";
app.use(rootRoute);
