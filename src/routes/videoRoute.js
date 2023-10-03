
// quản lý API của đối tượng
// quản lý endpoint theo chức năng

import express from 'express';
import { getVideo, createVideo, getVideoType, getVideoTypeId, getVideoById, getComment } from '../controllers/videoController.js';

const videoRoute = express.Router();

videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)

// api get video type
videoRoute.get("/get-video-type", getVideoType)
// api get video the type id
videoRoute.get("/get-video-typeid/:typeId", getVideoTypeId)

// api get video chi tiet
videoRoute.get("/get-video/:id", getVideoById)


//api get comment video
videoRoute.get("/get-comment/:videoId",getComment)

export default videoRoute;