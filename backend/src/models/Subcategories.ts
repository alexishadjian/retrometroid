import mongoose, { Schema, model } from 'mongoose';

// Créer le schéma
const subcategorySchema = new Schema({
  color_name: { type: String, required: true },
  color_hexadecimal: { type: String, required: true },
  option_subcategory_id: {
    type: [Schema.Types.ObjectId],
    ref: 'Subcategories',
    required: true,
  },
});

// Créer le modèle
const Subcategories = model('Subcategories', subcategorySchema);

export default Subcategories;
