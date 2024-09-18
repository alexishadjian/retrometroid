import Link from "next/link";
import Svg from "@/components/svg";

export default function Footer() {
    return (
        <footer className="bg-[--black] w-full wrapper flex justify-between items-center py-8">
            
            <div>
                <p className="text-[--white] text-[15px] font-bebasNeue mb-4">Tous droits réservés - Retrometroid 2024</p>

                <div className="flex items-center gap-4">
                    <Link href="/" className="logo">
                        <Svg name="instagram" color="#FFFFFF"  strokeWidth="1.5" width="22" height="22"/>
                    </Link>
                    <Link href="/" className="logo">
                        <Svg name="tiktok" color="#FFFFFF" strokeWidth="1.5" width="22" height="22"/>
                    </Link>
                    <Link href="/" className="logo">
                        <Svg name="mail" color="#FFFFFF" strokeWidth="1.5" width="22" height="22"/>
                    </Link>
                </div>
            </div>
            
            <nav className="flex flex-col gap-y-7 w-64">
                <Link href="/" className="text-[--white] text-[15px] font-bebasNeue">Mentions légales</Link>
                <Link href="/" className="text-[--white] text-[15px] font-bebasNeue">Conditions GénéralES de vente</Link>
                <Link href="/" className="text-[--white] text-[15px] font-bebasNeue">Politique de confidentialité</Link>
            </nav>

        </footer>
    );
}