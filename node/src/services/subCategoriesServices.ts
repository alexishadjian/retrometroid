import Subcategories from '../models/subCategories';
import Options from '../models/options';

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
 * Create a new subcategory and add it to a specific option.
 * @param {Object} subcategoryData - Data for the new subcategory including the option ID.
 * @returns {Promise<Object>} The created subcategory.
 */
export const createSubcategory = async (subcategoryData: any) => {
  try {
    const { color_name, color_hexadecimal, option_id } = subcategoryData;

    if (!option_id) {
      throw new Error('Option ID is required to add a subcategory.');
    }

    const subcategory = new Subcategories({
      color_name,
      color_hexadecimal,
      option_id,
    });

    const savedSubcategory = await subcategory.save();

    // Update the option to add the new subcategory
    const updatedOption = await Options.findByIdAndUpdate(
      option_id,
      { $push: { sub_categories: savedSubcategory._id } },
      { new: true },
    );

    console.log('New subcategory created:', savedSubcategory);
    return savedSubcategory;
  } catch (err: any) {
    console.error('Error creating subcategory:', err.message);
    throw new Error('An error occurred while creating the subcategory.');
  }
};

/**
 * Delete a subcategory by ID.
 * @param {string} id - The ID of the subcategory to delete.
 * @returns {Promise<void>}
 */
export const deleteSubcategory = async (id: string) => {
  try {
    console.log(`Deleting subcategory with ID: ${id}`);
    await Subcategories.findByIdAndDelete(id);
    console.log(`Subcategory with ID: ${id} deleted successfully`);
  } catch (err: any) {
    console.error(`Error deleting subcategory with ID: ${id}`, err.message);
    throw new Error(`An error occurred while deleting the subcategory.`);
  }
};

/**
 * Update a subcategory by ID.
 * @param {string} id - The ID of the subcategory to update.
 * @param {object} updateData - The data to update the subcategory with.
 * @returns {Promise<Object>} The updated subcategory.
 */
export const updateSubcategory = async (id: string, updateData: any) => {
  try {
    console.log(`Updating subcategory with ID: ${id}`);
    const updatedSubcategory = await Subcategories.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    console.log(`Subcategory with ID: ${id} updated successfully`);
    return updatedSubcategory;
  } catch (err: any) {
    console.error(`Error updating subcategory with ID: ${id}`, err.message);
    throw new Error(`An error occurred while updating the subcategory.`);
  }
};
