'use client';
import React, { useState, useEffect } from 'react';
import { RefreshCcw, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
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
  GBA_SHELL_CLEARBLACK,
  GBA_SHELL_CLEARBLUE,
  GBA_SHELL_CLEARBLUEOCEAN,
  GBA_SHELL_CLEARGLASS,
  GBA_SHELL_CLEARORANGE,
  GBA_SHELL_CLEARRED,
  GBA_SHELL_DMG,
  GBA_SHELL_GHOST,
  GBA_SHELL_GREEN,
  GBA_SHELL_RED,
  GBA_SHELL_WHITE,
  GBA_SHELL_YELLOW,
} from '@/public/images/gba_front';

// Définir les types pour les parties et les couleurs spécifiques
type PartType = 'GBA_BUTTON' | 'GBA_PAD' | 'GBA_SHELL' | 'GBA_IPS';
type PADColorType =
  | '#000000'
  | '#0000FF'
  | '#FFFFFF'
  | '#00FF00'
  | '#FF0000'
  | '#FFC0CB'
  | '#800080'
  | '#FFFF00';
type BUTTONColorType =
  | '#000000'
  | '#0000FF'
  | '#A9A9A9'
  | '#ADD8E6'
  | '#00FF7F'
  | '#00FF00'
  | '#FFA500'
  | '#B22222'
  | '#808080'
  | '#FFA07A'
  | '#FF0000'
  | '#FFC0CB'
  | '#FFFFFF';
type SHELLColorType =
  | '#000000'
  | '#0000FF'
  | '#ADD8E6'
  | '#FFFFFF'
  | '#FFA500'
  | '#FF0000'
  | '#B22222'
  | '#708090'
  | '#00FF00'
  | '#FFFF00';
type IPSColorType = '#000000' | '#B22222';

// Typing des options de configuration
const options: {
  name: string;
  description: string;
  colors: (PADColorType | BUTTONColorType | SHELLColorType | IPSColorType)[];
  part: PartType;
}[] = [
  {
    name: 'PADS',
    description: 'Couleur des PADS',
    colors: [
      '#000000',
      '#0000FF',
      '#FFFFFF',
      '#00FF00',
      '#FF0000',
      '#FFC0CB',
      '#800080',
      '#FFFF00',
    ] as PADColorType[],
    part: 'GBA_PAD',
  },
  {
    name: 'BUTTON',
    description: 'Couleur des BUTTONS',
    colors: [
      '#000000',
      '#0000FF',
      '#A9A9A9',
      '#ADD8E6',
      '#00FF7F',
      '#00FF00',
      '#FFA500',
      '#B22222',
      '#808080',
      '#FFA07A',
      '#FF0000',
      '#FFC0CB',
      '#FFFFFF',
    ] as BUTTONColorType[],
    part: 'GBA_BUTTON',
  },
  {
    name: 'SHELL',
    description: 'Couleur du SHELL',
    colors: [
      '#000000',
      '#0000FF',
      '#ADD8E6',
      '#FFFFFF',
      '#FFA500',
      '#FF0000',
      '#B22222',
      '#708090',
      '#00FF00',
      '#FFFF00',
    ] as SHELLColorType[],
    part: 'GBA_SHELL',
  },
  {
    name: 'IPS',
    description: "Couleur de l'écran IPS",
    colors: ['#000000', '#B22222'] as IPSColorType[],
    part: 'GBA_IPS',
  },
];

// Définitions spécifiques pour les couleurs et les images
const PAD_COLORS: Record<PADColorType, StaticImageData> = {
  '#000000': GBA_PAD_BLACK,
  '#0000FF': GBA_PAD_BLUE,
  '#FFFFFF': GBA_PAD_CLEAR,
  '#00FF00': GBA_PAD_GREEN,
  '#FF0000': GBA_PAD_RED,
  '#FFC0CB': GBA_PAD_ROSE,
  '#800080': GBA_PAD_VIOLET,
  '#FFFF00': GBA_PAD_YELLOW,
};

const BUTTON_COLORS: Record<BUTTONColorType, StaticImageData> = {
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

const SHELL_COLORS: Record<SHELLColorType, StaticImageData> = {
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

const IPS_COLORS: Record<IPSColorType, StaticImageData> = {
  '#000000': GBA_IPS_BLACK,
  '#B22222': GBA_IPS_DMG,
};

const colorOptions = {
  PADS: Object.keys(PAD_COLORS) as PADColorType[],
  BUTTONS: Object.keys(BUTTON_COLORS) as BUTTONColorType[],
  SHELLS: Object.keys(SHELL_COLORS) as SHELLColorType[],
  IPS: Object.keys(IPS_COLORS) as IPSColorType[],
};

export default function Configurator() {
  const [selectedPadColor, setSelectedPadColor] =
    useState<PADColorType>('#000000');
  const [selectedButtonColor, setSelectedButtonColor] =
    useState<BUTTONColorType>('#000000');
  const [selectedShellColor, setSelectedShellColor] =
    useState<SHELLColorType>('#000000');
  const [selectedIpsColor, setSelectedIpsColor] =
    useState<IPSColorType>('#000000');

  const [openSection, setOpenSection] = useState<number | null>(null);

  // Utilisation d'un effet pour loguer l'état sélectionné
  useEffect(() => {
    console.log('Selected Pad Color:', selectedPadColor);
    console.log('Selected Button Color:', selectedButtonColor);
    console.log('Selected Shell Color:', selectedShellColor);
    console.log('Selected Ips Color:', selectedIpsColor);
  }, [
    selectedPadColor,
    selectedButtonColor,
    selectedShellColor,
    selectedIpsColor,
  ]);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left section with phone & reload button */}
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

      {/* Right section with options list & color picker */}
      <div className="flex flex-col justify-between">
        <h2 className="uppercase text-3xl font-roboto p-4">Configuration</h2>

        {['PADS', 'BUTTONS', 'SHELLS', 'IPS'].map((section, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleSection(index)}
              className="text-left w-full flex justify-between items-center mb-1"
            >
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{section}</span>
                  <span className="font-light text-sm text-gray-400">
                    Couleur des {section.toLowerCase()}
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center">
                {/* Circle with selected color */}
                <div
                  className="w-6 h-6 mr-2 rounded-full"
                  style={{
                    backgroundColor:
                      section === 'PADS'
                        ? selectedPadColor
                        : section === 'BUTTONS'
                        ? selectedButtonColor
                        : section === 'SHELLS'
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
              {/* Color options */}
              <div className="flex flex-wrap">
                {colorOptions[section as keyof typeof colorOptions].map(
                  (color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-6 h-6 m-1 cursor-pointer rounded-full"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        console.log(`Selected color for ${section}:`, color);
                        if (section === 'PADS')
                          setSelectedPadColor(color as PADColorType);
                        if (section === 'BUTTONS')
                          setSelectedButtonColor(color as BUTTONColorType);
                        if (section === 'SHELLS')
                          setSelectedShellColor(color as SHELLColorType);
                        if (section === 'IPS')
                          setSelectedIpsColor(color as IPSColorType);
                      }}
                    ></div>
                  ),
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
