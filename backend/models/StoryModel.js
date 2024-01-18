import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const Story = db.define('story',{
    id_story: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    category: DataTypes.STRING,
    cover: {
        type: DataTypes.STRING, 
        allowNull: true, 
      },
    url: DataTypes.STRING,
    tags: DataTypes.STRING,
    status: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Story; 

(async() => {
    await db.sync();
})();
