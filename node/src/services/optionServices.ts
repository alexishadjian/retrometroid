import Options from '../models/options';
import Products from '../models/products';
import Subcategories from '../models/subCategories';

/**
 * Get all options from the database.
 * @returns {Promise<Array>} An array of options.
 */
export const getAllOptions = async () => {
  try {
    console.log('Fetching all options from the database...');
    const options = await Options.find();
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
