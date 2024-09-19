import { Request, Response } from 'express';
import { getAllProducts, createProduct } from '../services/productServices';

/**
 * Get all products
 * @param req Express request object
 * @param res Express response object
 */
export const getProducts = async (req: Request, res: Response) => {
  try {
    console.log('Fetching all products...');
    const products = await getAllProducts();
    console.log('Products fetched:', products);
    res.json(products);
  } catch (err: any) {
    console.error('Error fetching products:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching products.' });
  }
};

/**
 * Create a new product
 * @param req Express request object
 * @param res Express response object
 */
export const createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log('Creating a new product with data:', req.body);
    const newProduct = await createProduct(req.body);
    console.log('New product created:', newProduct);
    res.status(201).json(newProduct);
  } catch (err: any) {
    console.error('Error creating product:', err.message);
    res
      .status(400)
      .json({ message: 'An error occurred while creating the product.' });
  }
};
