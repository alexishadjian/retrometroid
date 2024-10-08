import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById as getProductByIdService,
} from '../services/productServices';

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

export const createNewProduct = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteProduct(id);
    res.status(204).send();
  } catch (err: any) {
    console.error('Error deleting product:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the product.' });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.params.id;
    const updatedProduct = await updateProduct(id, req.body);
    res.json(updatedProduct);
  } catch (err: any) {
    console.error('Error updating product:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while updating the product.' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err: any) {
    console.error('Error fetching product:', err.message);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the product.' });
  }
};
