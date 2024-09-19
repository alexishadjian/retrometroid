import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Route

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
