import Image from 'next/image';
import AboutSection from './about-section';
import { GBC3 } from '@/public/images';

export default function StickersSection() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Section Gauche : Titre et Texte */}
        <div className="flex flex-col items-center md:items-start md:text-left">
          <h2 className="uppercase font-extrabold text-3xl mb-4">
            Stickers personnalisés
          </h2>
          <p>
            Il est possible de personnaliser les stickers arrière avec le texte
            ou le thème que vous souhaitez. Pour parler du projet, veuillez me
            contacter sur{' '}
            <span className="font-semibold italic">Instagram</span>.
          </p>
        </div>

        {/* Section Droite : Image */}
        <div className="flex justify-center mt-6 md:mt-0">
          <Image
            src={GBC3}
            alt="Gameboy Color"
            layout="fixed"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="pb-10">
        <AboutSection />
      </div>
    </div>
  );
}
