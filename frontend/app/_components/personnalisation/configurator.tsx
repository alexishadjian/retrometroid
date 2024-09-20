'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RefreshCcw, ChevronDown, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import PriceSection from './price_section';

type Product = {
  _id: string;
  name: string;
  option_id: Option[];
};

type Option = {
  _id: string;
  option_type: string;
  option_description: string;
  sub_categories: SubCategory[];
};

type SubCategory = {
  _id: string;
  color_name: string;
  color_hexadecimal: string;
};

const colorPrices: Record<string, Record<string, number>> = {
  GBA_PAD: {
    '#000000': 0,
    '#0000FF': 10,
    '#FFFFFF': 15,
    '#00FF00': 10,
    '#FF0000': 20,
    '#FFC0CB': 15,
    '#800080': 5,
    '#FFFF00': 10,
  },
  GBA_BUTTON: {
    '#000000': 0,
    '#0000FF': 5,
    '#A9A9A9': 10,
    '#ADD8E6': 10,
    '#00FF7F': 15,
    '#00FF00': 10,
    '#FFA500': 20,
    '#B22222': 25,
    '#808080': 5,
    '#FFA07A': 15,
    '#FF0000': 20,
    '#FFC0CB': 15,
    '#FFFFFF': 10,
  },
  GBA_SHELL: {
    '#000000': 0,
    '#0000FF': 20,
    '#ADD8E6': 25,
    '#FFFFFF': 30,
    '#FFA500': 25,
    '#FF0000': 35,
    '#B22222': 30,
    '#708090': 10,
    '#00FF00': 20,
    '#FFFF00': 25,
  },
  GBA_IPS: {
    '#000000': 0,
    '#B22222': 30,
  },
};

const importImage = async (option: string, color: string) => {
  try {
    const image = await import(
      `@/public/images/gba_front/GBA_${option}_${color}.webp`
    );
    return image.default;
  } catch (error) {
    console.error(
      `Error importing image for option: ${option}, color: ${color}`,
      error,
    );
    throw error;
  }
};

export default function Configurator({ productId }: { productId: string }) {
  const basePrice = 100;

  const [selectedPadColor, setSelectedPadColor] = useState<string>('#000000');
  const [selectedButtonColor, setSelectedButtonColor] =
    useState<string>('#000000');
  const [selectedShellColor, setSelectedShellColor] =
    useState<string>('#000000');
  const [selectedIpsColor, setSelectedIpsColor] = useState<string>('#000000');

  const [padImage, setPadImage] = useState<string | StaticImageData | null>(
    null,
  );
  const [buttonImage, setButtonImage] = useState<
    string | StaticImageData | null
  >(null);
  const [shellImage, setShellImage] = useState<string | StaticImageData | null>(
    null,
  );
  const [ipsImage, setIpsImage] = useState<string | StaticImageData | null>(
    null,
  );

  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      console.log(`Fetching product with ID: ${id}`);
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/products/${id}`,
        );
        console.log('Product data fetched:', data);
        setProductData(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(productId);
  }, [productId]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      console.log('Calculating total price');
      let price = basePrice;
      price += colorPrices.GBA_PAD[selectedPadColor] || 0;
      price += colorPrices.GBA_BUTTON[selectedButtonColor] || 0;
      price += colorPrices.GBA_SHELL[selectedShellColor] || 0;
      price += colorPrices.GBA_IPS[selectedIpsColor] || 0;
      setTotalPrice(price);
      console.log('Total price calculated:', price);
    };

    calculateTotalPrice();
  }, [
    selectedPadColor,
    selectedButtonColor,
    selectedShellColor,
    selectedIpsColor,
  ]);

  const handleColorChange = async (optionType: string, color: string) => {
    console.log(`Changing ${optionType} color to ${color}`);
    const option = optionType.toUpperCase();
    const colorName = color.toUpperCase();

    try {
      const image = await importImage(option, colorName);
      if (optionType === 'PAD') setPadImage(image);
      if (optionType === 'BUTTON') setButtonImage(image);
      if (optionType === 'SHELL') setShellImage(image);
      if (optionType === 'IPS') setIpsImage(image);
    } catch (error) {
      console.error('Error setting image:', error);
    }
  };

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  if (loading) {
    console.log('Loading product data...');
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error loading product: {error.message}</p>;
  }

  if (!productData) {
    console.log('No product data found.');
    return <p>Product not found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="flex flex-col items-center">
        <div className="flex justify-start w-full">
          <RefreshCcw size={32} color="#BEBFC5" className="mb-4" />
        </div>
        <div className="relative w-full h-96">
          {padImage && (
            <Image
              src={padImage}
              alt="Pad Color"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
              className="absolute z-20"
            />
          )}
          {buttonImage && (
            <Image
              src={buttonImage}
              alt="Button Color"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
              className="absolute z-20"
            />
          )}
          {shellImage && (
            <Image
              src={shellImage}
              alt="Shell Color"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
              className="absolute z-10"
            />
          )}
          {ipsImage && (
            <Image
              src={ipsImage}
              alt="IPS Color"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
              className="absolute z-20"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <h2 className="uppercase text-3xl font-roboto p-4">
          Configuration: {productData.name}
        </h2>

        {productData.option_id.map((option, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleSection(index)}
              className="text-left w-full flex justify-between items-center mb-1"
            >
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">
                    {option.option_type}
                  </span>
                  <span className="font-light text-sm text-gray-400">
                    {option.option_description}
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div
                  className="w-6 h-6 mr-2 rounded-full"
                  style={{
                    backgroundColor:
                      option.option_type === 'PAD'
                        ? selectedPadColor
                        : option.option_type === 'BUTTON'
                        ? selectedButtonColor
                        : option.option_type === 'SHELL'
                        ? selectedShellColor
                        : selectedIpsColor,
                  }}
                ></div>
                <ChevronRight size={12} />
              </div>
            </button>
            <div
              className={`mt-2 ${openSection === index ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-wrap">
                {option.sub_categories.map((subCategory) => (
                  <div
                    key={subCategory._id}
                    className="w-6 h-6 m-1 cursor-pointer rounded-full"
                    style={{ backgroundColor: subCategory.color_hexadecimal }}
                    onClick={() => {
                      console.log(
                        `Selected color for ${option.option_type}: ${subCategory.color_hexadecimal}`,
                      );
                      handleColorChange(
                        option.option_type,
                        subCategory.color_name,
                      );
                      if (option.option_type === 'PAD')
                        setSelectedPadColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'BUTTON')
                        setSelectedButtonColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'SHELL')
                        setSelectedShellColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'IPS')
                        setSelectedIpsColor(subCategory.color_hexadecimal);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <ChevronDown />
        </div>
        <PriceSection
          totalPrice={totalPrice}
          selectedPadColor={
            selectedPadColor !== '#000000' ? selectedPadColor : 'default color'
          }
          selectedButtonColor={
            selectedButtonColor !== '#000000'
              ? selectedButtonColor
              : 'default color'
          }
          selectedShellColor={
            selectedShellColor !== '#000000'
              ? selectedShellColor
              : 'default color'
          }
          selectedIpsColor={
            selectedIpsColor !== '#000000' ? selectedIpsColor : 'default color'
          }
        />
      </div>
    </div>
  );
}
