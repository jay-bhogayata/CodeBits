import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "CodeBits",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
