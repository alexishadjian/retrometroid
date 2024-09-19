const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://<am_marcos>:4FFBqvvWWliuVS07@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority',
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

module.exports = connectDB;