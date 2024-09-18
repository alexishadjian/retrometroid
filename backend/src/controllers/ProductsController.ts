import { Request, Response } from 'express';
import { getAllProducts, createProduct } from '../services/ProductsServices';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const produits = await getAllProducts();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduit = await createProduct(req.body);
    res.status(201).json(newProduit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
