import mongoose, { Schema, Document } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price_initial
 *         - option_id
 *       properties:
 *         name:
 *           type: string
 *           description: The product name
 *         price_initial:
 *           type: string
 *           description: The initial price of the product
 *         option_id:
 *           type: array
 *           items:
 *             type: string
 *             description: Array of option IDs
 */
interface IProduct extends Document {
  name: string;
  price_initial: string;
  option_id: mongoose.Types.ObjectId[];
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price_initial: { type: String, required: true },
  option_id: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Options' }],
    required: true,
  },
});

const Products = mongoose.model<IProduct>('Products', ProductSchema);
export default Products;
