import express from 'express';
import {
  getOptions,
  createNewOption,
  deleteOptionById,
  updateOptionById,
} from '../controllers/optionsController';

const optionRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Options
 *   description: API for managing options
 */

/**
 * @swagger
 * /api/options:
 *   get:
 *     summary: Retrieve a list of options
 *     tags: [Options]
 *     responses:
 *       200:
 *         description: A list of options
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Option'
 */
optionRoutes.get('/', getOptions);

/**
 * @swagger
 * /api/options:
 *   post:
 *     summary: Create a new option
 *     tags: [Options]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *     responses:
 *       201:
 *         description: The created option
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Option'
 *       400:
 *         description: Bad request
 */
optionRoutes.post('/', createNewOption);

/**
 * @swagger
 * /api/options/{id}:
 *   delete:
 *     summary: Delete an option by ID
 *     tags: [Options]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the option to delete
 *     responses:
 *       204:
 *         description: The option was deleted
 *       404:
 *         description: Option not found
 */
optionRoutes.delete('/:id', deleteOptionById);

/**
 * @swagger
 * /api/options/{id}:
 *   patch:
 *     summary: Update an option by ID
 *     tags: [Options]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the option to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *     responses:
 *       200:
 *         description: The option was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Option'
 *       404:
 *         description: Option not found
 */
optionRoutes.patch('/:id', updateOptionById);

export default optionRoutes;
