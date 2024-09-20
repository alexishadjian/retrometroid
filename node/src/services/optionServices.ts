import Options from '../models/options';
import Products from '../models/products';
import { ISubcategory } from '../models/subCategories';

/**
 * Get all options from the database.
 * @returns {Promise<Array>} An array of options.
 */
export const getAllOptions = async () => {
  try {
    console.log('Fetching all options from the database...');
    // Populate 'sub_categories' to get the entire sub-category objects
    const options = await Options.find().populate('sub_categories');
    console.log('Options fetched:', options);
    return options;
  } catch (err: any) {
    console.error('Error fetching options:', err.message);
    throw new Error('An error occurred while fetching options.');
  }
};

/**
 * Create a new option in the database and add it to a specific product.
 * @param {Object} optionData - Data for the new option including the product ID.
 * @returns {Promise<Object>} The created option.
 */
export const createOption = async (optionData: any) => {
  try {
    const { option_type, option_description, product_id } = optionData;

    if (!product_id) {
      throw new Error('Product ID is required to add an option.');
    }

    const option = new Options({
      option_type,
      option_description,
      sub_categories: [],
    });

    const savedOption = await option.save();

    // Update the product to add the new option
    await Products.findByIdAndUpdate(product_id, {
      $push: { option_id: savedOption._id },
    });

    console.log('New option created:', savedOption);
    return savedOption;
  } catch (err: any) {
    console.error('Error creating option:', err.message);
    throw new Error('An error occurred while creating the option.');
  }
};

/**
 * Delete an option by ID.
 * @param {string} id - The ID of the option to delete.
 * @returns {Promise<void>}
 */
export const deleteOption = async (id: string) => {
  try {
    console.log(`Deleting option with ID: ${id}`);
    await Options.findByIdAndDelete(id);
    console.log(`Option with ID: ${id} deleted successfully`);
  } catch (err: any) {
    console.error(`Error deleting option with ID: ${id}`, err.message);
    throw new Error(`An error occurred while deleting the option.`);
  }
};

/**
 * Update an option by ID.
 * @param {string} id - The ID of the option to update.
 * @param {object} updateData - The data to update the option with.
 * @returns {Promise<Object>} The updated option.
 */
export const updateOption = async (id: string, updateData: any) => {
  try {
    console.log(`Updating option with ID: ${id}`);
    const updatedOption = await Options.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate('sub_categories');
    console.log(`Option with ID: ${id} updated successfully`);
    return updatedOption;
  } catch (err: any) {
    console.error(`Error updating option with ID: ${id}`, err.message);
    throw new Error(`An error occurred while updating the option.`);
  }
};

/**
 * Add a sub-category to an option with the full details of the sub-category.
 * @param {string} optionId - The ID of the option to update.
 * @param {ISubcategory} subCategory - The sub-category object to add.
 * @returns {Promise<Object>} The updated option with the new sub-category.
 */
export const addSubCategoryToOption = async (
  optionId: string,
  subCategory: ISubcategory,
) => {
  try {
    const updatedOption = await Options.findByIdAndUpdate(
      optionId,
      {
        $push: { sub_categories: subCategory },
      },
      { new: true },
    ).populate('sub_categories');
    console.log(`Updated option with new sub-category: ${updatedOption}`);
    return updatedOption;
  } catch (err: any) {
    console.error(
      `Error adding sub-category to option with ID: ${optionId}`,
      err.message,
    );
    throw new Error(
      `An error occurred while adding the sub-category to the option.`,
    );
  }
};
