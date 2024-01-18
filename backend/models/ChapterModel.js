import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const Chapter = db.define('chapter',{
    id_chapter: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    id_story: DataTypes.INTEGER,
    story: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Story; 

(async() => {
    await db.sync();
})();
