import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Option model
interface IOption extends Document {
  option_type: string;
  option_description: string;
  sub_categories: mongoose.Types.ObjectId[]; // Array of sub-category IDs
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Option:
 *       type: object
 *       required:
 *         - option_type
 *         - option_description
 *       properties:
 *         option_type:
 *           type: string
 *           description: Type of the option
 *         option_description:
 *           type: string
 *           description: Description of the option
 *         sub_categories:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of sub-category IDs
 */
const OptionsSchema: Schema = new Schema({
  option_type: { type: String, required: true },
  option_description: { type: String, required: true },
  sub_categories: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategories' }],
    default: [],
  },
});

const Options = mongoose.model<IOption>('Options', OptionsSchema);
export default Options;
