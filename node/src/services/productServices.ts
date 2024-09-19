import Products from '../models/products';

/**
 * Get all products from the database.
 * @returns {Promise<Array>} An array of products.
 */
export const getAllProducts = async () => {
  try {
    console.log('Fetching all products from the database...');
    const products = await Products.find().populate('option_id');
    console.log('Products fetched:', products);
    return products;
  } catch (err: any) {
    console.error('Error fetching products:', err.message);
    throw new Error('An error occurred while fetching products.');
  }
};

/**
 * Create a new product in the database.
 * @param {Object} productData - Data for the new product.
 * @returns {Promise<Object>} The created product.
 */
export const createProduct = async (productData: any) => {
  try {
    console.log('Creating a new product with data:', productData);
    const product = new Products(productData);
    const savedProduct = await product.save();
    console.log('New product created:', savedProduct);
    return savedProduct;
  } catch (err: any) {
    console.error('Error creating product:', err.message);
    throw new Error('An error occurred while creating the product.');
  }
};
