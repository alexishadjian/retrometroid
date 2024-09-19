import mongoose, { Document, Schema, Model } from 'mongoose';

// Définition de l'interface pour le modèle
interface IProduct extends Document {
  name: string;
  price_initial: string;
  option_id: mongoose.Types.ObjectId[];
}

// Définition du schéma
const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price_initial: { type: String, required: true },
  option_id: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Options' }],
    required: true,
  },
});

const Products: Model<IProduct> = mongoose.model<IProduct>(
  'Products',
  ProductSchema,
);
export default Products;
