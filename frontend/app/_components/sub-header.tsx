import React from 'react';
import { Truck } from 'lucide-react';

export default function SubHeader() {
  return (
    <div className="bg-black p-4 flex items-center justify-center">
      <Truck size={20} color="#FFF" />
      <p className="text-white px-2">
        Livraison offerte dès 139€ avec Mondial Relay
      </p>
    </div>
  );
}
