import { Request, Response } from 'express';
import {
  getAllSubcategories,
  createSubcategory,
} from '../services/subCategoriesServices';

/**
 * Get all subcategories
 * @param req Express request object
 * @param res Express response object
 */
export const getSubcategories = async (req: Request, res: Response) => {
  try {
    console.log('Fetching all subcategories...');
    const subcategories = await getAllSubcategories();
    console.log('Subcategories fetched:', subcategories);
    res.json(subcategories);
  } catch (err: any) {
    console.error('Error fetching subcategories:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching subcategories.' });
  }
};

/**
 * Create a new subcategory
 * @param req Express request object
 * @param res Express response object
 */
export const createNewSubcategory = async (req: Request, res: Response) => {
  try {
    console.log('Creating a new subcategory with data:', req.body);
    const newSubcategory = await createSubcategory(req.body);
    console.log('New subcategory created:', newSubcategory);
    res.status(201).json(newSubcategory);
  } catch (err: any) {
    console.error('Error creating subcategory:', err.message);
    res
      .status(400)
      .json({ message: 'An error occurred while creating the subcategory.' });
  }
};
