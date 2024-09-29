import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  getAllOptions,
  createOption,
  deleteOption,
  updateOption,
} from '../services/optionServices';

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

export const createNewOption = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

export const deleteOptionById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteOption(id);
    res.status(204).send();
  } catch (err: any) {
    console.error('Error deleting option:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the option.' });
  }
};

export const updateOptionById = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.params.id;
    const updatedOption = await updateOption(id, req.body);
    res.json(updatedOption);
  } catch (err: any) {
    console.error('Error updating option:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while updating the option.' });
  }
};
