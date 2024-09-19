import Subcategories from '../models/subCategories';

/**
 * Get all subcategories from the database.
 * @returns {Promise<Array>} An array of subcategories.
 */
export const getAllSubcategories = async () => {
  try {
    console.log('Fetching all subcategories from the database...');
    const subcategories = await Subcategories.find();
    console.log('Subcategories fetched:', subcategories);
    return subcategories;
  } catch (err: any) {
    console.error('Error fetching subcategories:', err.message);
    throw new Error('An error occurred while fetching subcategories.');
  }
};

/**
 * Create a new subcategory in the database.
 * @param {Object} subcategoryData - Data for the new subcategory.
 * @returns {Promise<Object>} The created subcategory.
 */
export const createSubcategory = async (subcategoryData: any) => {
  try {
    console.log('Creating a new subcategory with data:', subcategoryData);
    const subcategory = new Subcategories(subcategoryData);
    const savedSubcategory = await subcategory.save();
    console.log('New subcategory created:', savedSubcategory);
    return savedSubcategory;
  } catch (err: any) {
    console.error('Error creating subcategory:', err.message);
    throw new Error('An error occurred while creating the subcategory.');
  }
};
