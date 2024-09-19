import express from 'express';
import {
  getSubcategories,
  createNewSubcategory,
} from '../controllers/subCategoriesController';

const subcategoryRoutes = express.Router();

subcategoryRoutes.get('/', getSubcategories);
subcategoryRoutes.post('/', createNewSubcategory);

export default subcategoryRoutes;
