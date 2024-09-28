import { useState } from 'react';
import Svg from '@/components/svg';
import Button from '../button';

type Props = {
    options: any;
    createSubcategory: any;
    type: string;
};


export default function ProductSubcategories({ options, createSubcategory, type }: Props) {

    const [colorName, setColorName] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [optionId, setOptionId] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const currentOption = options.find((cat) => cat.option_type === type);

    if (currentOption && !optionId) {
        setOptionId(currentOption._id);
    } else {

    }

    const handleClick = async (colorName: string, selectedColor: string, optionId: string) => {
        // Create a new subcategory
        const res = await createSubcategory(colorName, selectedColor, optionId);
        
        // Add dynamically the new subcategory to the current option
        currentOption.sub_categories.push(res);

        // Reset states
        setIsVisible(!isVisible);
        setOptionId(null);
        setColorName(null);
        setSelectedColor('#000000');
    }

    return (
        <div className="w-1/6 flex gap-1 flex-wrap relative">

            {currentOption && currentOption.sub_categories.map((sub: { id: string; color_hexadecimal: string }) => (
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
                        onClick={() => handleClick(colorName, selectedColor, optionId)}
                    />
                </div>
            )}
        </div>
    );
}