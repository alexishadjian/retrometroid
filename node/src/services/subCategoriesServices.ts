import Subcategories from '../models/subCategories';

export const getAllSubcategories = async () => {
  return await Subcategories.find();
};

export const createSubcategory = async (subcategoryData: any) => {
  const subcategory = new Subcategories(subcategoryData);
  return await subcategory.save();
};
