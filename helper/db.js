import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
    console.log(connection.host);
  } catch (e) {
    console.log("Database connection failed");
    console.log(e);
  }
};
