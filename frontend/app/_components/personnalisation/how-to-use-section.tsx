import { GBC1, GBC2, GBC4, GBC5 } from '@/public/images';
import Image from 'next/image';

export default function HowToUseSection() {
  return (
    <div className="wrapper mx-auto p-4">
      {/* Bento layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Section avec le titre + Section 3 en dessous */}
        <div className="space-y-4">
          <div className="bg-black p-20 rounded-lg font-extralight text-medium relative">
            <div className="flex flex-col items-start justify-end absolute bottom-8 left-12">
              <p className="text-white font-bebasNeue text-medium">
                Pour que ça marche mieux
              </p>
              <h2 className="uppercase text-3xl text-white font-extrabold font-roboto">
                Mode d&apos;emploi
              </h2>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold text-lg">LED RGB</h2>
            <div className="flex justify-center my-4">
              <Image src={GBC4} alt="Gameboy Color" width={200} height={200} />
            </div>
            <ul className="mt-4 px-6">
              <li className="list-disc text-sm">
                L’allumage des LED se fait en maintenant A+B pendant 3/4s
              </li>
              <li className="list-disc text-sm">
                Pour régler la luminosité des LED, maintenir SELECT + A ou B. Il
                existe 4 modes de couleurs :
              </li>
              <li className="list-disc text-sm">
                STATIC : Les LED sont fixes sur la couleur que vous avez
                choisie.
              </li>
              <li className="list-disc text-sm">
                BREATH : Les LED vont baisser et monter en intensité.
              </li>
              <li className="list-disc text-sm">
                RAINBOW : Les LED changeront de couleur de gauche à droite.
              </li>
              <li className="list-disc text-sm">
                OFF : Les LED sont éteintes. Pour choisir la couleur en STATIC,
                il faudra les configurer une à une
              </li>
              <li className="list-disc text-sm">
                START + A + B pour sélectionner les LED
              </li>
              <li className="list-disc text-sm">
                START + A ou B pour changer la couleur
              </li>
              <li className="list-disc text-sm">
                SELECT A ou B pour passer d’une LED à une autre.
              </li>
              <li className="list-disc text-sm">
                Maintenir START + A + B pour valider les couleurs.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold text-lg">
              Régler la luminosité de l&apos;écran
            </h2>
            <div className="flex justify-center my-4">
              <Image src={GBC2} alt="Gameboy Color" width={200} height={200} />
            </div>
            <ul className="mt-4 px-6">
              <li className="list-disc text-sm">
                Chaque console intègre un pavé tactile qui se situe en haut de
                la console au milieu.
              </li>
              <li className="list-disc text-sm">
                Toucher une fois pour augmenter la luminosité. L’écran possède 8
                niveaux d’intensité.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 + Section 5 en dessous */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-bold text-lg">Batterie rechargeable USB</h2>
            <div className="flex justify-center my-4">
              <Image src={GBC1} alt="Gameboy Color" width={200} height={200} />
            </div>
            <p className="mt-4 text-sm px-6">
              La batterie a une capacité de 1800mAh. Il est important d’utiliser
              uniquement le câble de charge fourni avec la console. Pour le dock
              de charge, ne dépassez pas 5 W. Ne pas utiliser de Fast Charge.
              Cela va bloquer la console et la mettre en sécurité. (Un SAV sera
              nécessaire pour la débloquer.) En termes d’autonomie, la batterie
              propose une durée de jeu entre 8 h et 10 h. Il est également
              possible de jouer branché.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-bold text-lg">
              Accéder au menu de l&apos;écran
            </h2>
            <div className="flex justify-center my-4">
              <Image src={GBC5} alt="Gameboy Color" width={200} height={200} />
            </div>
            <p className="mt-4 px-6">
              Il existe deux manières d’accéder au menu de la console :
            </p>
            <ul className="mt-4 px-6">
              <li className="list-disc text-sm">
                En maintenant le touché tactile pendant 3/4s
              </li>
              <li className="list-disc text-sm">
                En restant appuyé sur START + SELECT pendant 3/4s Le menu
                intègre 6 catégories :
              </li>
              <li className="list-disc text-sm">
                BRT : Niveau de luminosité entre 01 et 08
              </li>
              <li className="list-disc text-sm">
                DSP : 5 effets de pixel look (Le 1 simule les pixels de l’écran
                d’origine.)
              </li>
              <li className="list-disc text-sm">
                FRM : Simule un flou de mouvement (Off par default)
              </li>
              <li className="list-disc text-sm">
                LGC : Permet de changer la couleur du logo GBC
              </li>
              <li className="list-disc text-sm">
                RGB : Permet de choisir une couleur précise via le code couleur
              </li>
              <li className="list-disc text-sm">
                N : Recentre l’écran si celui-ci n’est plus centré Pour passer
                d’une catégorie à une autre, maintenir le tactile pendant 1 s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
