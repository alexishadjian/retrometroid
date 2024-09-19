import express from 'express';
import {
  getSubcategories,
  createNewSubcategory,
} from '../controllers/subCategoriesController';

const subcategoryRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Subcategories
 *   description: API for managing subcategories
 */

/**
 * @swagger
 * /api/subcategories:
 *   get:
 *     summary: Retrieve a list of subcategories
 *     tags: [Subcategories]
 *     responses:
 *       200:
 *         description: A list of subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subcategory'
 */
subcategoryRoutes.get('/', getSubcategories);

/**
 * @swagger
 * /api/subcategories:
 *   post:
 *     summary: Create a new subcategory
 *     tags: [Subcategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategory'
 *     responses:
 *       201:
 *         description: The created subcategory
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       400:
 *         description: Bad request
 */
subcategoryRoutes.post('/', createNewSubcategory);

export default subcategoryRoutes;
