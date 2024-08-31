import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "lenslight_tr",
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

export default conn;
