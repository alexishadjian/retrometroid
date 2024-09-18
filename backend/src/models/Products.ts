import mongoose from 'mongoose';

const Products = new mongoose.Schema({
    name: {type: String, required: true},
    price_initial: {type: String, required: true},
    option_id: {type: [mongoose.Schema.Types.ObjectId], ref: 'Options', required: true}
});

export default Products;