'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RefreshCcw, ChevronDown, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import PriceSection from './price_section';

import {
  GBA_USBC,
  GBA_BUTTON_BLACK,
  GBA_BUTTON_BLUE,
  GBA_BUTTON_CLEARBLACK,
  GBA_BUTTON_CLEARBLUE,
  GBA_BUTTON_CLEARGRASS,
  GBA_BUTTON_CLEARGREEN,
  GBA_BUTTON_CLEARORANGE,
  GBA_BUTTON_DMG,
  GBA_BUTTON_GREY,
  GBA_BUTTON_ORANGE,
  GBA_BUTTON_RED,
  GBA_BUTTON_ROSE,
  GBA_BUTTON_WHITE,
  GBA_IPS_BLACK,
  GBA_IPS_DMG,
  GBA_PAD_BLACK,
  GBA_PAD_BLUE,
  GBA_PAD_CLEAR,
  GBA_PAD_GREEN,
  GBA_PAD_RED,
  GBA_PAD_ROSE,
  GBA_PAD_VIOLET,
  GBA_PAD_YELLOW,
  GBA_SHELL_BLACK,
  GBA_SHELL_BLUE,
  GBA_SHELL_CLEARBLUE,
  GBA_SHELL_CLEARGLASS,
  GBA_SHELL_CLEARORANGE,
  GBA_SHELL_CLEARRED,
  GBA_SHELL_DMG,
  GBA_SHELL_GHOST,
  GBA_SHELL_GREEN,
  GBA_SHELL_YELLOW,
} from '@/public/images/gba_front';

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

const PAD_COLORS: Record<string, StaticImageData> = {
  '#000000': GBA_PAD_BLACK,
  '#0000FF': GBA_PAD_BLUE,
  '#FFFFFF': GBA_PAD_CLEAR,
  '#00FF00': GBA_PAD_GREEN,
  '#FF0000': GBA_PAD_RED,
  '#FFC0CB': GBA_PAD_ROSE,
  '#800080': GBA_PAD_VIOLET,
  '#FFFF00': GBA_PAD_YELLOW,
};

const BUTTON_COLORS: Record<string, StaticImageData> = {
  '#000000': GBA_BUTTON_BLACK,
  '#0000FF': GBA_BUTTON_BLUE,
  '#A9A9A9': GBA_BUTTON_CLEARBLACK,
  '#ADD8E6': GBA_BUTTON_CLEARBLUE,
  '#00FF7F': GBA_BUTTON_CLEARGRASS,
  '#00FF00': GBA_BUTTON_CLEARGREEN,
  '#FFA500': GBA_BUTTON_CLEARORANGE,
  '#B22222': GBA_BUTTON_DMG,
  '#808080': GBA_BUTTON_GREY,
  '#FFA07A': GBA_BUTTON_ORANGE,
  '#FF0000': GBA_BUTTON_RED,
  '#FFC0CB': GBA_BUTTON_ROSE,
  '#FFFFFF': GBA_BUTTON_WHITE,
};

const SHELL_COLORS: Record<string, StaticImageData> = {
  '#000000': GBA_SHELL_BLACK,
  '#0000FF': GBA_SHELL_BLUE,
  '#ADD8E6': GBA_SHELL_CLEARBLUE,
  '#FFFFFF': GBA_SHELL_CLEARGLASS,
  '#FFA500': GBA_SHELL_CLEARORANGE,
  '#FF0000': GBA_SHELL_CLEARRED,
  '#B22222': GBA_SHELL_DMG,
  '#708090': GBA_SHELL_GHOST,
  '#00FF00': GBA_SHELL_GREEN,
  '#FFFF00': GBA_SHELL_YELLOW,
};

const IPS_COLORS: Record<string, StaticImageData> = {
  '#000000': GBA_IPS_BLACK,
  '#B22222': GBA_IPS_DMG,
};

export default function Configurator({ productId }: { productId: string }) {
  const basePrice = 100;

  const [selectedPadColor, setSelectedPadColor] = useState<string>('#000000');
  const [selectedButtonColor, setSelectedButtonColor] =
    useState<string>('#000000');
  const [selectedShellColor, setSelectedShellColor] =
    useState<string>('#000000');
  const [selectedIpsColor, setSelectedIpsColor] = useState<string>('#000000');

  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/products/${id}`,
        );
        setProductData(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(productId);
  }, [productId]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let price = basePrice;
      price += colorPrices.GBA_PAD[selectedPadColor] || 0;
      price += colorPrices.GBA_BUTTON[selectedButtonColor] || 0;
      price += colorPrices.GBA_SHELL[selectedShellColor] || 0;
      price += colorPrices.GBA_IPS[selectedIpsColor] || 0;
      setTotalPrice(price);
    };

    calculateTotalPrice();
  }, [
    selectedPadColor,
    selectedButtonColor,
    selectedShellColor,
    selectedIpsColor,
  ]);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading product: {error.message}</p>;
  }

  if (!productData) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="flex flex-col items-center">
        <div className="flex justify-start w-full">
          <RefreshCcw size={32} color="#BEBFC5" className="mb-4" />
        </div>
        <div className="relative w-full h-96">
          <Image
            src={GBA_USBC}
            alt="USB-C"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
          />
          <Image
            src={PAD_COLORS[selectedPadColor]}
            alt="Pad Color"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
            className="absolute z-20"
          />
          <Image
            src={BUTTON_COLORS[selectedButtonColor]}
            alt="Button Color"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
            className="absolute z-20"
          />
          <Image
            src={SHELL_COLORS[selectedShellColor]}
            alt="Shell Color"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
            className="absolute z-10"
          />
          <Image
            src={IPS_COLORS[selectedIpsColor]}
            alt="IPS Color"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
            className="absolute z-20"
          />
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
                      option.option_type === 'GBA_PAD'
                        ? selectedPadColor
                        : option.option_type === 'GBA_BUTTON'
                        ? selectedButtonColor
                        : option.option_type === 'GBA_SHELL'
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
                        `Selected color for ${option.option_type}:`,
                        subCategory.color_hexadecimal,
                      );
                      if (option.option_type === 'GBA_PAD')
                        setSelectedPadColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'GBA_BUTTON')
                        setSelectedButtonColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'GBA_SHELL')
                        setSelectedShellColor(subCategory.color_hexadecimal);
                      if (option.option_type === 'GBA_IPS')
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
