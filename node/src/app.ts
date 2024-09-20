import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './database/connection';
import productRoutes from './routes/productRouter';
import optionRoutes from './routes/optionRouter';
import subcategoryRoutes from './routes/subCategoriesRouter';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
  origin: isProduction ? process.env.URL_PROD : process.env.URL_DEV,
  credentials: true,
};

console.log(`CORS Origin: ${corsOptions.origin}`);
app.use(cors(corsOptions));

// Connexion à MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/options', optionRoutes);
app.use('/api/subcategories', subcategoryRoutes);

// Swagger Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
