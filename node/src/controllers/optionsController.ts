import { Request, Response } from 'express';
import { getAllOptions, createOption } from '../services/optionServices';

/**
 * Get all options
 * @param req Express request object
 * @param res Express response object
 */
export const getOptions = async (req: Request, res: Response) => {
  try {
    console.log('Fetching all options...');
    const options = await getAllOptions();
    console.log('Options fetched:', options);
    res.json(options);
  } catch (err: any) {
    console.error('Error fetching options:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching options.' });
  }
};

/**
 * Create a new option
 * @param req Express request object
 * @param res Express response object
 */
export const createNewOption = async (req: Request, res: Response) => {
  try {
    console.log('Creating a new option with data:', req.body);
    const newOption = await createOption(req.body);
    console.log('New option created:', newOption);
    res.status(201).json(newOption);
  } catch (err: any) {
    console.error('Error creating option:', err.message);
    res
      .status(400)
      .json({ message: 'An error occurred while creating the option.' });
  }
};
