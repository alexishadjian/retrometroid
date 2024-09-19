import mongoose, { Document, Schema } from 'mongoose';

// Définition de l'interface pour le modèle
interface IOption extends Document {
    option_type: string;
    option_description: string;
    option_subcategory_id: mongoose.Types.ObjectId;
}

// Définition du schéma
const OptionsSchema: Schema = new Schema({
    option_type: { type: String, required: true },
    option_description: { type: String, required: true },
    option_subcategory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },
});

// Création du modèle
const Options = mongoose.model<IOption>('Options', OptionsSchema);