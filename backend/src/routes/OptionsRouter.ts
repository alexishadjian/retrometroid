import express from 'express';
import { getOptions, createNewOption } from '../controllers/OptionsController';

const optionRoutes = express.Router();

optionRoutes.get('/', getOptions);
optionRoutes.post('/', createNewOption);

export default optionRoutes;
