import express from "express";
const videoRoute = express.Router();

import { getVideo, createVideo } from "../controllers/videoController.js";
videoRoute.get("/get-video", getVideo);
videoRoute.post("/create-video", createVideo);

export default videoRoute;
