import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _users from "./users.js";
import _video from "./video.js";
import _video_comment from "./video_comment.js";
import _video_like from "./video_like.js";
import _video_type from "./video_type.js";

export default function initModels(sequelize) {
    const users = _users.init(sequelize, DataTypes);
    const video = _video.init(sequelize, DataTypes);
    const video_comment = _video_comment.init(sequelize, DataTypes);
    const video_like = _video_like.init(sequelize, DataTypes);
    const video_type = _video_type.init(sequelize, DataTypes);

    video.belongsTo(users, { foreignKey: "user_id" });
    users.hasMany(video, { foreignKey: "user_id" });
    video_comment.belongsTo(users, { foreignKey: "user_id" });
    users.hasMany(video_comment, { foreignKey: "user_id" });
    video_like.belongsTo(users, { foreignKey: "user_id" });
    users.hasMany(video_like, { foreignKey: "user_id" });
    video_comment.belongsTo(video, { foreignKey: "video_id" });
    video.hasMany(video_comment, { foreignKey: "video_id" });
    video_like.belongsTo(video, { foreignKey: "video_id" });
    video.hasMany(video_like, { foreignKey: "video_id" });
    video.belongsTo(video_type, { foreignKey: "type_id" });
    video_type.hasMany(video, { foreignKey: "type_id" });

    return {
        users,
        video,
        video_comment,
        video_like,
        video_type,
    };
}
