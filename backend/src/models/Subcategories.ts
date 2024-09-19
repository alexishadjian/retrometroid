import mongoose, { Document, Schema, Model } from 'mongoose';

// Définition de l'interface pour le modèle
interface ISubcategory extends Document {
  color_name: string;
  color_hexadecimal: string;
  option_subcategory_id: mongoose.Types.ObjectId[];
}

// Définition du schéma
const SubcategorySchema: Schema = new Schema({
  color_name: { type: String, required: true },
  color_hexadecimal: { type: String, required: true },
  option_subcategory_id: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategories' }],
    required: true,
  },
});

const Subcategories: Model<ISubcategory> = mongoose.model<ISubcategory>(
  'Subcategories',
  SubcategorySchema,
);
export default Subcategories;
