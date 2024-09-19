import { Request, Response } from 'express';
import { getAllProducts, createProduct } from '../services/productServices';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
