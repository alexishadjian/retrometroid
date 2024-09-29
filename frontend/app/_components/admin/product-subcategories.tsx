import { useState } from 'react';
import Svg from '@/components/svg';
import Button from '../button';
import axios from 'axios';
import { useAlert } from '@/components/alert';


type Props = {
    subCategories: [any];
    optionId: string
};


export default function ProductSubcategories({ subCategories, optionId }: Props) {

    const [colorName, setColorName] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [isVisible, setIsVisible] = useState(false);

    const { showAlert } = useAlert();


    // Création d'une sous-catégorie (POST)
    const createSubcategory = async (colorName: string, colorHexa: string) => {
        
        try {
            console.log(colorName, colorHexa, optionId);
            if (!colorName || !colorHexa) {
                showAlert("Tous les champs doivent être remplis.", "error");            
                return;
            }
            
            const res = await axios.post(`${process.env.API_URL}/subcategories`, {
                color_name: colorName,
                color_hexadecimal: colorHexa,
                option_id: optionId,
            });

            return res.data;

        } catch (error) {
            console.error("Erreur lors de la création de la sous catégorie :", error);
            showAlert("Erreur lors de la création de la sous catégorie.", "error");
        }
    };

    const handleClick = async (colorName: string, selectedColor: string,) => {
        // Create a new subcategory
        const res = await createSubcategory(colorName, selectedColor);        
        
        // Add dynamically the new subcategory to the current option
        subCategories.push(res);

        // Reset states
        setIsVisible(!isVisible);
        setColorName(null);
        setSelectedColor('#000000');
    }

    return (
        <div className="flex gap-1 flex-wrap relative mt-2">

            {subCategories.map((sub: { id: string; color_hexadecimal: string }) => (
                <div key={sub.id} className="rounded-full w-[20px] aspect-square" style={{backgroundColor: sub.color_hexadecimal }}></div>
            ))}

            <button 
                className="bg-zinc-100 rounded-full w-[20px] aspect-square rotate-45 flex items-center justify-center relative"
                onClick={() => setIsVisible(!isVisible)}
                // style={{ backgroundColor: (selectedColor.product_id == product._id) ? selectedColor.color : "#f4f4f5" }}
            >
                <Svg name="cross" color='gray' strokeWidth="2" width="14" height="14" />
            </button>
            
            {isVisible && (
                <div className='bg-[--white] absolute -translate-y-full p-3 rounded-lg shadow-sm flex items-center gap-x-2'>
                    <input 
                        type="color"
                        className="" 
                        onChange={(e) => setSelectedColor(e.target.value) } 
                    />
                    <input 
                        type="text"
                        className="bg-[#f0efef] p-1 rounded"
                        placeholder="lemon"
                        onChange={(e) => setColorName(e.target.value) } 
                    />
                    <Button 
                        content="Ajouter"
                        size="small"
                        onClick={() => handleClick(colorName, selectedColor)}
                    />
                </div>
            )}
        </div>
    );
}