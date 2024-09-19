import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Option model
interface IOption extends Document {
  option_type: string;
  option_description: string;
  option_subcategory_id: mongoose.Types.ObjectId;
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
 *         - option_subcategory_id
 *       properties:
 *         option_type:
 *           type: string
 *           description: Type of the option
 *         option_description:
 *           type: string
 *           description: Description of the option
 *         option_subcategory_id:
 *           type: string
 *           description: ID of the subcategory the option belongs to
 */
const OptionsSchema: Schema = new Schema({
  option_type: { type: String, required: true },
  option_description: { type: String, required: true },
  option_subcategory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategories',
    required: true,
  },
});

const Options = mongoose.model<IOption>('Options', OptionsSchema);
export default Options;
