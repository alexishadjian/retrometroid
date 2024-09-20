import { Request, Response } from 'express';
import {
  getAllSubcategories,
  createSubcategory,
  deleteSubcategory,
  updateSubcategory,
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
 * Create a new subcategory and add it to an option
 * @param req Express request object
 * @param res Express response object
 */
export const createNewSubcategory = async (req: Request, res: Response) => {
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

/**
 * Delete a subcategory by ID
 * @param req Express request object
 * @param res Express response object
 */
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

/**
 * Update a subcategory by ID
 * @param req Express request object
 * @param res Express response object
 */
export const updateSubcategoryById = async (req: Request, res: Response) => {
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
