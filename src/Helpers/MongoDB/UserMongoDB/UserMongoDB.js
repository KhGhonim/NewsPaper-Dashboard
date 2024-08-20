import mongoose from "mongoose";

export const MongoDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_API_MONGODB);
    console.log("connected to MongoDB");
    
  } catch (error) {
    console.log("ERROR WITH CONNECTING MongoDB", error.message);
  }
};
