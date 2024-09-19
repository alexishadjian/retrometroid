import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './database/connection';
import productRoutes from './routes/productRouter';
import optionRoutes from './routes/optionRouter';
import subcategoryRoutes from './routes/subCategoriesRouter';

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'test') {
  // Démarrer le serveur seulement si on n'est pas en mode test
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
