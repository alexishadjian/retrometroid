import express from 'express';
import { getProducts, createNewProduct} from '../controllers/ProductsController';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createNewProduct);

export default router;
