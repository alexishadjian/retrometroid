import Subcategories from '../models/Subcategories';

export const getAllSubcategories = async () => {
  return await Subcategories.find();
};

export const createSubcategory = async (SubcategoryData: any) => {
  const Subcategory = new Subcategories(SubcategoryData);
  return await Subcategory.save();
};
