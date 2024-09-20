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

/**
 * Delete a product by ID.
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<void>}
 */
export const deleteProduct = async (id: string) => {
  try {
    console.log(`Deleting product with ID: ${id}`);
    await Products.findByIdAndDelete(id);
    console.log(`Product with ID: ${id} deleted successfully`);
  } catch (err: any) {
    console.error(`Error deleting product with ID: ${id}`, err.message);
    throw new Error(`An error occurred while deleting the product.`);
  }
};

/**
 * Update a product by ID.
 * @param {string} id - The ID of the product to update.
 * @param {object} updateData - The data to update the product with.
 * @returns {Promise<Object>} The updated product.
 */
export const updateProduct = async (id: string, updateData: any) => {
  try {
    console.log(`Updating product with ID: ${id}`);
    const updatedProduct = await Products.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    console.log(`Product with ID: ${id} updated successfully`);
    return updatedProduct;
  } catch (err: any) {
    console.error(`Error updating product with ID: ${id}`, err.message);
    throw new Error(`An error occurred while updating the product.`);
  }
};
