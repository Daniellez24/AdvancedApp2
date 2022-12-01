import mongoose from "mongoose";

export function formDbConnection() {
  try {
    mongoose.connect(
      "mongodb+srv://tamir:tamir123456@cluster0.qgr0sfw.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    return `Error connecting to Mongo ${error}`;
  }
}

export const getMongooseInstance = () => mongoose;
