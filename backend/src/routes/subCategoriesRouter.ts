import express from 'express';
import {
  getSubcategories,
  createNewSubcategory,
  updateSubcategoryById,
  deleteSubcategoryById,
} from '../controllers/subCategoriesController';
import {
  validateSubcategory,
  validateIdParam,
} from '../middlewares/validators';

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
 *     summary: Create a new subcategory and add it to an option
 *     tags: [Subcategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               color_name:
 *                 type: string
 *               color_hexadecimal:
 *                 type: string
 *               option_id:
 *                 type: string
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
subcategoryRoutes.post('/', validateSubcategory, createNewSubcategory);

/**
 * @swagger
 * /api/subcategories/{id}:
 *   delete:
 *     summary: Delete a subcategory by ID
 *     tags: [Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to delete
 *     responses:
 *       204:
 *         description: The subcategory was deleted
 *       404:
 *         description: Subcategory not found
 */
subcategoryRoutes.delete('/:id', validateIdParam, deleteSubcategoryById);

/**
 * @swagger
 * /api/subcategories/{id}:
 *   patch:
 *     summary: Update a subcategory by ID
 *     tags: [Subcategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategory'
 *     responses:
 *       200:
 *         description: The subcategory was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       404:
 *         description: Subcategory not found
 */
subcategoryRoutes.patch(
  '/:id',
  validateIdParam,
  validateSubcategory,
  updateSubcategoryById,
);

export default subcategoryRoutes;
