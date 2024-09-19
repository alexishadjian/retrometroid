import React from 'react';

interface PriceSectionProps {
  totalPrice: number;
}

export default function PriceSection({ totalPrice }: PriceSectionProps) {
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
        <button className="bg-black px-4 py-2 rounded-3xl">
          <p className="text-white font-semibold">Ajouter au panier</p>
        </button>
      </div>
    </div>
  );
}
