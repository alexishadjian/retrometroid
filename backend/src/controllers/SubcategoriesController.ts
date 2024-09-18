import { Request, Response } from 'express';
import { getAllSubcategories, createSubcategory } from '../services/SubcategoriesServices';

export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const sousOptions = await getAllSubcategories();
    res.json(sousOptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewSubcategory = async (req: Request, res: Response) => {
  try {
    const newSousOption = await createSubcategory(req.body);
    res.status(201).json(newSousOption);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
