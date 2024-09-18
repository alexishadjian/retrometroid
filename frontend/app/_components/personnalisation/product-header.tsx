import { PackageOpen } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';

export default function ProductHeader() {
  return (
    <div>
      <div className="bg-[#121212] w-full">
        <div className="p-6 md:pt-24 pt-10">
          <p className="text-gray-400 font-thin">À partir de 149€</p>
          <h1 className="uppercase text-white font-extrabold md:text-5xl text-2xl">
            Gameboy color
          </h1>
        </div>
      </div>
      <div className="bg-white flex justify-end p-3">
        <PackageOpen color="#BEBFC5" size={14} />
        <p className="text-gray-400 font-extralight text-xs pl-2">
          Livraison gratuite
        </p>
        <p className="font-extralight text-gray-700 text-xs px-2">|</p>
        <BriefcaseBusiness color="#BEBFC5" size={14} />
        <p className="text-gray-400 font-extralight text-xs pl-2">
          À partir de 149€
        </p>
      </div>
    </div>
  );
}
