import AboutSection from './about-section';

export default function StickersSection() {
  return (
    <div className="bg-white">
      <div className="md:w-2/3 p-6">
        <h2 className="uppercase font-extrabold text-3xl">
          Stickers personnalisés
        </h2>
        <div className="w-11/12 md:mt-6 mt-4">
          <p>
            Il est possible de personnaliser les stickers arrière avec le texte
            ou le thème que vous souhaitez. Pour parler du projet, veuillez me
            contacter sur{' '}
            <span className="font-semibold italic">Instagram</span>.
          </p>
        </div>
      </div>
      <div className="pb-10">
        <AboutSection />
      </div>
    </div>
  );
}
