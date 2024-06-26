import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("USING EXISTING CONNECTION !!");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0].readyState, "CONNECTED");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
