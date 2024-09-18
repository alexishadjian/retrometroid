import express from 'express';
import connectDB from './config/db';
import produitRoutes from './routes/produit';
import optionRoutes from './routes/option';
import sousOptionRoutes from './routes/sousOption';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/produits', produitRoutes);
app.use('/api/options', optionRoutes);
app.use('/api/sous-options', sousOptionRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
