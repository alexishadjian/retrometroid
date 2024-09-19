import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface for the Subcategory model
interface ISubcategory extends Document {
  color_name: string;
  color_hexadecimal: string;
  option_subcategory_id: mongoose.Types.ObjectId[];
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
 *         - option_subcategory_id
 *       properties:
 *         color_name:
 *           type: string
 *           description: Name of the color
 *         color_hexadecimal:
 *           type: string
 *           description: Hexadecimal code of the color
 *         option_subcategory_id:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of option IDs that belong to this subcategory
 */
const SubcategorySchema: Schema = new Schema({
  color_name: { type: String, required: true },
  color_hexadecimal: { type: String, required: true },
  option_subcategory_id: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Options' }],
    required: true,
  },
});

const Subcategories: Model<ISubcategory> = mongoose.model<ISubcategory>(
  'Subcategories',
  SubcategorySchema,
);
export default Subcategories;
