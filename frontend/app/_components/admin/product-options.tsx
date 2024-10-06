import { useState } from 'react';
import ProductSubcategories from '@/components/admin/product-subcategories';
import { useAlert } from '@/components/alert';
import Svg from '@/components/svg';
import axios from 'axios';
import Button from '@/components/button';


type Props = {
    options: any;
    productId: string;
};


export default function ProductOptions({ options: initialOptions, productId }: Props) {

    const { showAlert } = useAlert();

    const [options, setOptions] = useState(initialOptions);
    const [newOption, setNewOption] = useState({ type: '', description: '' });


    // Create a new option
    const createOption = async () => {
        
        try {
            if (!newOption.type || !newOption.description) {
                showAlert("Tous les champs doivent être remplis.", "error");            
                return;
            }
            
            const res = await axios.post(`${process.env.API_URL}/options`, {
                option_type: newOption.type,
                option_description: newOption.description,
                product_id: productId,
            });

            // Display a success message
            showAlert("Option créée avec succès.", "success");
            // Add dynamically the new option
            setOptions([...options, res.data]);
            // Reset the form
            setNewOption({ type: '', description: '' });

        } catch (error) {
            console.error("Erreur lors de la création de l'option :", error);
            showAlert("Erreur lors de la création de l'option.", "error");
        }
    };

    // Delete option
    const deleteOption = async (id: string) => {
        try {            
            await axios.delete(`${process.env.API_URL}/options/${id}`);

            // Display a success message
            showAlert("Option supprimée avec succès.", "success");
            // Remove dynamically the deleted option
            setOptions(options.filter((sub: { _id: string; }) => sub._id !== id));
            
        } catch (error) {
            console.error("Erreur lors de la suppression de l'option:", error);
            showAlert("Erreur lors de la suppression de l'option.", "error");
        }
    };

    return (
        <div>
            {options.map((option: any) => (
                <div className="flex flex-col gap-1 flex-wrap relative mb-2 bg-slate-100 p-3 rounded-lg">
    
                    <input type="text" placeholder="Nom de l'option" className="p-2 rounded font-semibold bg-white" value={option.option_type} />
                    <textarea placeholder="Description de l'option" className="p-2 rounded bg-white" value={option.option_description} />
    
                    <div className="flex gap-3 items-end">
                        <div className="flex-grow"><ProductSubcategories subCategories={option.sub_categories} optionId={option._id} /></div>
                        <button className="1/6" onClick={() => deleteOption(option._id)}><Svg name="bin" color="#808080" strokeWidth="2" width="16" height="16" /></button>
                    </div>
                    
                </div>
            ))}


            <div className="flex flex-col gap-1 flex-wrap relative mb-2">
                
                <input 
                    type="text"
                    placeholder="Nom de l'option"
                    className="p-2 rounded font-semibold border"
                    onChange={(e) => setNewOption({ ...newOption, type: e.target.value })}
                    value={newOption.type}
                />
                <textarea
                    placeholder="Description de l'option"
                    className="p-2 rounded border"
                    onChange={(e) => setNewOption({ ...newOption, description: e.target.value })}
                    value={newOption.description}
                />
                
            </div>

            <Button
                content="Ajouter"
                onClick={createOption}
                size="small"
            />

        </div>
    );
}