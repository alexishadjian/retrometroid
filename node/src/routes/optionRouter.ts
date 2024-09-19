import express from 'express';
import { getOptions, createNewOption } from '../controllers/optionsController';

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

export default optionRoutes;
