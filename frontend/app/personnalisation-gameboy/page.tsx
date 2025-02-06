import Configurator from '../_components/personnalisation/configurator';
import HowToUseSection from '../_components/personnalisation/how-to-use-section';
import InspirationSection from '../_components/personnalisation/inspiration-section';
import ProductHeader from '../_components/personnalisation/product-header';
import StickersSection from '../_components/personnalisation/stickers-section';
import SubHeader from '../_components/sub-header';

// produit en dur pour le moment
const productId = '67a4bad5efc7d8fc983dca5d'; // ID du produit Game Boy Classic

export default function PersonnalisationGameboyPage() {
  return (
    <div>
      <SubHeader />
      <ProductHeader />
      <Configurator productId={productId} />
      <StickersSection />
      <InspirationSection />
      <HowToUseSection />
    </div>
  );
}
