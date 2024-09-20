import Products from '../models/products';

/**
 * Get all products from the database.
 * @returns {Promise<Array>} An array of products.
 */
export const getAllProducts = async () => {
  try {
    const products = await Products.find().populate('option_id');
    return products;
  } catch (err: any) {
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
    const product = new Products(productData);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (err: any) {
    throw new Error('An error occurred while creating the product.');
  }
};

/**
 * Get a product by ID from the database.
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Object|null>} The product if found, else null.
 */
export const getProductById = async (id: string) => {
  try {
    const product = await Products.findById(id).populate('option_id');
    return product;
  } catch (err: any) {
    throw new Error(
      `An error occurred while fetching the product with ID: ${id}`,
    );
  }
};

/**
 * Delete a product by ID.
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<void>}
 */
export const deleteProduct = async (id: string) => {
  try {
    await Products.findByIdAndDelete(id);
  } catch (err: any) {
    throw new Error('An error occurred while deleting the product.');
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
    const updatedProduct = await Products.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedProduct;
  } catch (err: any) {
    throw new Error('An error occurred while updating the product.');
  }
};
