import HeroSliderSection from "@/components/hero-slider-section";
import TitleSection from "@/components/title-section";
import CustomProductSection from "@/components/custom-product-section";

export default function Home() {
    
    return (
        <div>
            <HeroSliderSection />
            <TitleSection title="CUSTOMISATION" subtitle="Construit ta propre console" />
            <CustomProductSection />
        </div>
    );
}
