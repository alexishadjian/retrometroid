import { useState } from 'react';
import Svg from '@/components/svg';
import Button from '../button';
import axios from 'axios';
import { useAlert } from '@/components/alert';


type Props = {
    subCategories: any;
    optionId: string
};


export default function ProductSubcategories({ subCategories: initialSubCategories, optionId }: Props) {

    const [subCategories, setSubCategories] = useState(initialSubCategories);

    const [colorName, setColorName] = useState('');
    const [colorHexa, setColorHexa] = useState('#000000');
    const [isVisible, setIsVisible] = useState(false);
    const [subcategoryId, setSubcategoryId] = useState<string | null>(null);

    const { showAlert } = useAlert();


    // Create a new subcategory
    const createSubcategory = async () => {
        
        try {
            if (!colorName || !colorHexa) {
                showAlert("Tous les champs doivent être remplis.", "error");            
                return;
            }
            
            const res = await axios.post(`${process.env.API_URL}/subcategories`, {
                color_name: colorName,
                color_hexadecimal: colorHexa,
                option_id: optionId,
            });

            showAlert("Sous catégorie créée avec succès.", "success");

            // Add dynamically the new subcategory to the current option
            setSubCategories([...subCategories, res.data]); 

        } catch (error) {
            console.error("Erreur lors de la création de la sous catégorie :", error);
            showAlert("Erreur lors de la création de la sous catégorie.", "error");
        }
    };

    // Delete a subcategory
    const deleteSubcategory = async (id: string) => {
        try {            
            await axios.delete(`${process.env.API_URL}/subcategories/${id}`);

            showAlert("Sous catégorie supprimée avec succès.", "success");

            // Remove dynamically the deleted subcategory from the current option
            setSubCategories(subCategories.filter((sub: { _id: string; }) => sub._id !== id));
            
        } catch (error) {
            console.error("Erreur lors de la suppression de la sous catégorie :", error);
            showAlert("Erreur lors de la suppression de la sous catégorie.", "error");
        }
    };


    const handleAdd = async () => {
        // Create a new subcategory
        await createSubcategory();        
        
        // Reset states
        setIsVisible(!isVisible);
        setColorName('');
        setColorHexa('#000000');
    }

    const handleCategoryClick = (subCategoryId: string, colorName: string, colorHexa: string) => {
        setSubcategoryId(subCategoryId); 
        setIsVisible(!isVisible);
        setColorName(colorName);
        setColorHexa(colorHexa);
    }

    const handleDelete = async () => {
        if (subcategoryId) {
            // Delete the subcategory
            await deleteSubcategory(subcategoryId);            

            // Reset states
            setIsVisible(false);
            setColorName('');
            setColorHexa('#000000');
            setSubcategoryId(null);
        }
    };

    return (
        <div className="flex gap-1 flex-wrap relative mt-2">

            {subCategories.map((sub: { _id: string; color_name: string; color_hexadecimal: string }) => (
                <div 
                    key={sub._id}
                    className="rounded-full w-[20px] aspect-square cursor-pointer"
                    style={{backgroundColor: sub.color_hexadecimal }}
                    onClick={() => handleCategoryClick(sub._id, sub.color_name, sub.color_hexadecimal)}
                ></div>
            ))}

            <button 
                className="bg-zinc-200 rounded-full w-[20px] aspect-square rotate-45 flex items-center justify-center relative"
                onClick={() => {
                    setSubcategoryId(null);   
                    setIsVisible(!isVisible);
                }} 
            >
                <Svg name="cross" color='gray' strokeWidth="2" width="14" height="14" />
            </button>
            
            {isVisible && (
                <div className='bg-[--white] absolute -translate-y-full p-3 rounded-lg shadow-sm flex items-center gap-x-2'>
                    <input 
                        type="color"
                        onChange={(e) => setColorHexa(e.target.value)}
                        value={colorHexa}
                    />
                    <input 
                        type="text"
                        className="bg-slate-100 p-1 rounded"
                        placeholder="lemon"
                        onChange={(e) => setColorName(e.target.value)}
                        value={colorName} 
                    />
                    {subcategoryId ? (
                        <Button
                            content="Supprimer"
                            size="small"
                            onClick={() => handleDelete()}
                            color='red'
                        />
                    ) : (
                        <Button
                            content="Ajouter"
                            size="small"
                            onClick={() => handleAdd()}
                        />
                    )}
                </div>
            )}
        </div>
    );
}