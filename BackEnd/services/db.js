import mongoose from "mongoose";

export function formDbConnection() {
  try {
    mongoose.connect(
      "mongodb+srv://tamir:tamir123456@cluster0.qgr0sfw.mongodb.net/Cluster0"
    );
  } catch (error) {
    return `Error connecting to Mongo ${error}`;
  }
}

export const getMongooseInstance = () => mongoose;
