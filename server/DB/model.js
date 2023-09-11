import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import url from "url";
import util from "util";

const db = await connectToDB("postgresql:///o-auth");

export class User extends Model {
  [util.inspect.custom](){
    return this.toJSON();
  }
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  img: {
    type: DataTypes.TEXT
  }
},{
  modelName: "user",
  sequelize: db
});

if(process.argv[1] === url.fileURLToPath(import.meta.url)){
  console.log("Syncing database!");
  await db.sync();
  console.log("Finished syncing database!");
}