import Options from '../models/Options';

export const getAllOptions = async () => {
  return await Options.find();
};

export const createOption = async (optionData: any) => {
  const option = new Options(optionData);
  return await option.save();
};
