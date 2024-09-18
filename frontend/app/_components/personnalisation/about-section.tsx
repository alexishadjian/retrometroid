'use client';
import React, { useState } from 'react';

export default function AboutSection() {
  // Initialiser avec "Description" pour l'avoir activé par défaut
  const [selectedTitle, setSelectedTitle] = useState<string>('Description');

  const renderParagraph = (title: string) => {
    switch (title) {
      case 'Description':
        return (
          <p className="text-gray-500 text-base">
            Chaque console que je propose est moddée à partir de cartes mères
            officielles restaurées. Les composants neufs tels que l&apos;écran,
            la coque et les boutons sont neufs, bien que non officiels Nintendo.
            Cela me permet de garantir des consoles personnalisées de haute
            qualité, alliant fiabilité et esthétique unique.
          </p>
        );
      case 'Acompte':
        return (
          <p className="text-gray-500 text-base">
            Un acompte de 30 % sera demandé pour confirmer chaque commande, le
            solde restant sera à régler une fois la console terminé.
          </p>
        );
      case 'Fournir une console':
        return (
          <p className="text-gray-500 text-base">
            Vous pouvez me fournir une console fonctionnelle sur laquelle je
            pourrais travailler. Merci de me contacter directement sur Instagram
            pour organiser l&apos;expédition de votre console.
          </p>
        );
      case 'Délais et expéditions':
        return (
          <p className="text-gray-500 text-base">
            Les consoles sont préparées sur commande, nécessitant jusqu&apos;à
            40 jours avant l&apos;expédition. Nous offrons des options
            d&apos;expédition rapides et fiables: Colissimo, Mondial Relay ou
            Chronopost Express.
          </p>
        );
      case 'Garantie':
        return (
          <p className="text-gray-500 text-base">
            Les consoles sont garanties 3 mois. Cependant, nous restons
            disponible pour toutes réparations ou remplacement si besoin.
          </p>
        );
      default:
        return null;
    }
  };

  const titles = [
    'Description',
    'Acompte',
    'Fournir une console',
    'Délais et expéditions',
    'Garantie',
  ];

  return (
    <div className="m-4 p-4 border rounded-xl border-gray-50 shadow-lg">
      {/* Titles et Paragraphs */}
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:flex-wrap">
        {titles.map((title) => (
          <div key={title} className="w-full md:w-auto">
            <p
              className={`uppercase text-lg font-medium hover:text-blue-700 hover:underline cursor-pointer ${
                selectedTitle === title ? 'text-blue-700 underline' : ''
              }`}
              onClick={() =>
                setSelectedTitle(selectedTitle === title ? '' : title)
              }
            >
              {title}
            </p>
            {/* Paragraphs for small screens */}
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden block md:hidden ${
                selectedTitle === title ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {selectedTitle === title && (
                <div className="mt-2">{renderParagraph(title)}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Paragraphs for medium and large screens */}
      <div className="hidden mt-4 p-4 border-t md:block">
        {renderParagraph(selectedTitle)}
      </div>
    </div>
  );
}
