import { Sequelize } from "sequelize";

export default async function connectToDB(dbURI){
  console.log(`Connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    define: {
      timestamps: false,
      underscored: false,
    }
  });

  try {
    await sequelize.authenticate();
    console.log(`DB connected successfully!`);
  } catch(err){
    console.log(`Unable to connect to DB: ${err}`);
  }

  return sequelize;
}