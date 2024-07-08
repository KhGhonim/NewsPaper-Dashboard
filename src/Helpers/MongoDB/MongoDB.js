import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://khaledonem89:tF9o4zcbk5F1yJzY@newspaper.3cepbsr.mongodb.net/Data?retryWrites=true&w=majority&appName=NewsPaper`);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("ERROR WITH CONNECTING MongoDB", error.message);
  }
};
