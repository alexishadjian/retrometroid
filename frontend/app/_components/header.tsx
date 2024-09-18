import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";
import { Logo } from "@/images";

export default function Header() {
    return (
        <header className="bg-[--white] fixed left-0 top-0 right-0 shadow-md z-10">
            <div className="flex justify-between items-center wrapper-small">

                <Link href="/" className="logo">
                    <Image 
                        src={Logo}
                        alt="Logo"
                        width={120}
                        height={20}
                        sizes="100%"
                    />
                </Link>
                
                <nav className="flex gap-1">
                    <Link href="/personnalisation-gameboy" className="p-4 text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]">PERSONNALISATION</Link>
                    <Link href="/" className="p-4 text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]">PSVITA - OLED</Link>
                    <Link href="/" className="p-4 text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]">ÉDITIONS LIMITÉES</Link>
                    <Link href="/" className="p-4 text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]">ACCESSOIRES</Link>
                    <Link href="/" className="p-4 text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]">FONDS D'ÉCRAN</Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Link href="/login"><Svg name="user" strokeWidth="1.75" width="18" height="18"/></Link>
                    <Link href="/cart" className="py-3 px-4"><Svg name="cart" strokeWidth="1.5" width="18" height="18"/></Link>
                </div>

            </div>
        </header>
    );
}