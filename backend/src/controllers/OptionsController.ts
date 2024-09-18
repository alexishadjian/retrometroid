import { Request, Response } from 'express';
import { getAllOptions, createOption } from '../services/OptionsServices';

export const getOptions = async (req: Request, res: Response) => {
  try {
    const options = await getAllOptions();
    res.json(options);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewOption = async (req: Request, res: Response) => {
  try {
    const newOption = await createOption(req.body);
    res.status(201).json(newOption);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
