import Products from '../models/Products';

export const getAllProducts = async () => {
  return await Products.find();
};

export const createProduct = async (productData: any) => {
  const product = new Products(productData);
  return await product.save();
};
