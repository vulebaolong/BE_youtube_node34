import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const getVideo = async (req, res) => {

    // SELECT video_id, video_name FROM video WHERE video_id = 1;
    let data = await model.video.findAll({
        include: ["type"]
    });

    res.send(data);
}

const createVideo = (req, res) => {
    res.send("Create video");
}

const getVideoType = async (req, res) => {
    let data = await model.video_type.findAll();

    res.send(data);
}
const getVideoTypeId = async (req, res) => {
    let { typeId } = req.params;

    // SELECT * FROM video WHERE type_id = params;
    let data = await model.video.findAll({
        where: {
            type_id: typeId
        }
    });

    res.send(data);
}

const getVideoById = async (req, res) => {
    let { id } = req.params;

    // SELECT * FROM video WHERE type_id = params;
    // let data = await model.video.findByPk(id, {
    //     include: ["user"]
    // });

    let data = await model.video.findOne({
        where: {
            video_id: id
        },
        include:["user"]
    });

    res.send(data);
}

const getComment = async (req, res) => {
    let { videoId } = req.params;


    let data = await model.video_comment.findAll({
        where: {
            video_id: videoId
        },
        include: ["user"]
    });
    res.send(data)
}

export {
    getVideo,
    createVideo,
    getVideoType,
    getVideoTypeId,
    getVideoById,
    getComment
}
// JOIN
