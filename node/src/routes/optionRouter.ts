import express from 'express';
import { getOptions, createNewOption } from '../controllers/optionsController';

const optionRoutes = express.Router();

optionRoutes.get('/', getOptions);
optionRoutes.post('/', createNewOption);

export default optionRoutes;
