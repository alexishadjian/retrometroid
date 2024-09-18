import express from 'express';
import { getSubcategories, createNewSubcategory } from '../controllers/SubcategoriesController';

const router = express.Router();

router.get('/', getSubcategories);
router.post('/', createNewSubcategory);

export default router;
