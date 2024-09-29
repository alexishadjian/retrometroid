import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  getAllSubcategories,
  createSubcategory,
  deleteSubcategory,
  updateSubcategory,
} from '../services/subCategoriesServices';

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

export const createNewSubcategory = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log('Creating a new subcategory with data:', req.body);
    const newSubcategory = await createSubcategory(req.body);
    console.log('New subcategory created and added to option:', newSubcategory);
    res.status(201).json(newSubcategory);
  } catch (err: any) {
    console.error('Error creating subcategory:', err.message);
    res
      .status(400)
      .json({ message: 'An error occurred while creating the subcategory.' });
  }
};

export const deleteSubcategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteSubcategory(id);
    res.status(204).send();
  } catch (err: any) {
    console.error('Error deleting subcategory:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the subcategory.' });
  }
};

export const updateSubcategoryById = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.params.id;
    const updatedSubcategory = await updateSubcategory(id, req.body);
    res.json(updatedSubcategory);
  } catch (err: any) {
    console.error('Error updating subcategory:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while updating the subcategory.' });
  }
};
