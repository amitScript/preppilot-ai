
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected");
    console.log("Database =", mongoose.connection.name);
    console.log("Host =", mongoose.connection.host);

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;