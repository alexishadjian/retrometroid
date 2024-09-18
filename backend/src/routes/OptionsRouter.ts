import express from 'express';
import { getOptions, createNewOption } from '../controllers/OptionsController';

const router = express.Router();

router.get('/', getOptions);
router.post('/', createNewOption);

export default router;
