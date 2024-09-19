import { Request, Response } from 'express';
import {
  getAllSubcategories,
  createSubcategory,
} from '../services/subcategoriesServices';

export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const subcategories = await getAllSubcategories();
    res.json(subcategories);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewSubcategory = async (req: Request, res: Response) => {
  try {
    const newSubcategory = await createSubcategory(req.body);
    res.status(201).json(newSubcategory);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
