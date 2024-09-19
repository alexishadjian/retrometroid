import mongoose, { Schema, model } from 'mongoose';

// Créer le schéma
const Subcategories = new Schema({
  color_name: { type: String, required: true },
  color_hexadecimal: { type: String, required: true },
  option_subcategory_id: {
    type: [Schema.Types.ObjectId],
    ref: 'Subcategories',
    required: true,
  },
});

export default Subcategories;
