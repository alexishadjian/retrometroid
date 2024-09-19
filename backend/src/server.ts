import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import optionRoutes from './routes/OptionsRouter';
import productRoutes from './routes/ProductsRouter';
import subcategoryRoutes from './routes/SubcategoriesRouter';
import connectDB from './database/Connection';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connexion à MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/options', optionRoutes);
app.use('/api/subcategories', subcategoryRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
