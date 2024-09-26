import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface for the Subcategory model
interface ISubcategory extends Document {
  color_name: string;
  color_hexadecimal: string;
  option_id: mongoose.Types.ObjectId; // ID of the option the subcategory belongs to
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Subcategory:
 *       type: object
 *       required:
 *         - color_name
 *         - color_hexadecimal
 *         - option_id
 *       properties:
 *         color_name:
 *           type: string
 *           description: Name of the color
 *         color_hexadecimal:
 *           type: string
 *           description: Hexadecimal code of the color
 *         option_id:
 *           type: string
 *           description: ID of the option the subcategory belongs to
 */
const SubcategorySchema: Schema = new Schema({
  color_name: { type: String, required: true },
  color_hexadecimal: { type: String, required: true },
  option_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Options',
    required: true,
  },
});

const Subcategories: Model<ISubcategory> = mongoose.model<ISubcategory>(
  'Subcategories',
  SubcategorySchema,
);
export default Subcategories;
export { ISubcategory };
