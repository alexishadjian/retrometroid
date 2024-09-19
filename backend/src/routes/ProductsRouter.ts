import express from 'express';
import {
  getProducts,
  createNewProduct,
} from '../controllers/ProductsController';

const productRoutes = express.Router();

productRoutes.get('/', getProducts);
productRoutes.post('/', createNewProduct);

export default productRoutes;
