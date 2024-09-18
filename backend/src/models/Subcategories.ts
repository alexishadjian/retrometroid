import mongoose from 'mongoose';

const Subcategories = mongoose.model("Subcategories", {
    color_name: {type: String, required: true},
    color_hexadecimal: {type: String, required: true},
    option_subcategory_id: {type: [mongoose.ObjectId], ref: 'Subcategories', required: true}
});

export default Subcategories;