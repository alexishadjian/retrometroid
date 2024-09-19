import Options from '../models/options';

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
 * Create a new option in the database.
 * @param {Object} optionData - Data for the new option.
 * @returns {Promise<Object>} The created option.
 */
export const createOption = async (optionData: any) => {
  try {
    console.log('Creating a new option with data:', optionData);
    const option = new Options(optionData);
    const savedOption = await option.save();
    console.log('New option created:', savedOption);
    return savedOption;
  } catch (err: any) {
    console.error('Error creating option:', err.message);
    throw new Error('An error occurred while creating the option.');
  }
};
