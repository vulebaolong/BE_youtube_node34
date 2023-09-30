import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize)
const getVideo = async (req, res) => {
    const data = await model.video.findAll({
        include: [model.video_type]
    });
    return res.status(200).json(data);
};
const createVideo = (req, res) => {
    return res.status(200).json("createVideo");
};

export { getVideo, createVideo };
