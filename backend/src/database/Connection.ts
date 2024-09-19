import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log('MONGO URL', process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log('MongoDB connected');
  } catch (err) {
    console.log('CONSOLE MONGOOOOOOO', process.env.MONGO_URL);
    console.error((err as Error).message);
    process.exit(1);
  }
};

export default connectDB;