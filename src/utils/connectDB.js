import mongoose from "mongoose";

async function connectDB() {
  console.log("Connecting to Db...");
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to Db...");
}

export default connectDB;
