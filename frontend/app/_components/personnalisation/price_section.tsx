import React from 'react';
import axios from 'axios';

interface PriceSectionProps {
  totalPrice: number;
  selectedPadColor: string;
  selectedButtonColor: string;
  selectedShellColor: string;
  selectedIpsColor: string;
}

export default function PriceSection({
  totalPrice,
  selectedPadColor,
  selectedButtonColor,
  selectedShellColor,
  selectedIpsColor,
}: PriceSectionProps) {
  const addToCart = async () => {
    const productData = {
      name: 'GB console - Mathis',
      type: 'simple',
      regular_price: totalPrice.toString(),
      description: `Console GB avec ces options :
        - Couleur des pads : ${selectedPadColor}
        - Couleurs des boutons: ${selectedButtonColor}
        - Couleur du boitier: ${selectedShellColor}
        - Couleur de l'écran: ${selectedIpsColor}`,
      short_description: 'Console GB personnalisée',
      categories: [{ id: 1 }],
    };

    console.log('Product data to be sent:', productData);

    const auth = `Basic ${Buffer.from(
      'ck_bb8f230364904539050fff1a5b157f7378a00949:cs_1891b02d5b3cd3952c4c2e779c987a42284205c7',
    ).toString('base64')}`;

    try {
      const response = await axios.post(
        'https://api-retrometroid.devprod.fr/wp-json/wc/v3/products',
        productData,
        {
          headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Produit ajouté au catalogue:', response.data);
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout au catalogue:",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).response ? (error as any).response.data : error,
      );
    }
  };

  return (
    <div className="p-4 rounded-2xl shadow-lg">
      <div className="mb-4">
        <p className="text-2xl font-bold">{totalPrice}€</p>
        <p className="text-base font-light">Prix total</p>
      </div>
      <div className="mb-4">
        <p className="text-base font-light">
          Acompte (30%) : {(totalPrice * 0.3).toFixed(2)}€
        </p>
        <p className="text-base font-light">Livraison dans 35-40 jours</p>
      </div>
      <div className="flex justify-center">
        <button onClick={addToCart} className="bg-black px-4 py-2 rounded-3xl">
          <p className="text-white font-semibold">Ajouter au panier</p>
        </button>
      </div>
    </div>
  );
}
