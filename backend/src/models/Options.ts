import mongoose from 'mongoose';

const Options = new mongoose.Schema({
    option_type: {type: String, required: true},
    option_description: {type: String, required: true},
    option_subcategory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },
});

export default Options;