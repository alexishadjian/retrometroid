"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Svg from '@/components/svg';
import { Logo } from '@/images';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[--white] fixed left-0 top-0 right-0 shadow-md z-50">
      <div className="flex justify-between items-center wrapper-small">
        <Link href="/" className="logo order-1 md:order-none">
          <Image src={Logo} alt="Logo" width={120} height={20} sizes="100%" />
        </Link>

        <button className="md:hidden" onClick={toggleMenu}>
          <Svg name="menu" strokeWidth="1.5" width="18" height="18" />
        </button>

        <nav className={`flex flex-col md:flex-row gap-5 md:gap-0 fixed left-0 bottom-0 top-0 p-8 md:p-0 md:relative bg-[--white] transition-transform duration-300 ease-in-out shadow-md md:shadow-none ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}>
          <div className="flex justify-between mb-5 md:hidden gap-8">
            <Link href="/" className="logo" onClick={toggleMenu}>
              <Image src={Logo} alt="Logo" width={120} height={20} sizes="100%" />
            </Link>
            <button className="md:hidden" onClick={toggleMenu}>
              <Svg name="cross" strokeWidth="1.5" width="22" height="22" />
            </button>  
          </div>
          <Link
            href="/personnalisation-gameboy"
            className="md:p-4 md:text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]"
            onClick={toggleMenu}
          >
            PERSONNALISATION
          </Link>
          <Link
            href="/"
            className="md:p-4 md:text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]"
          >
            PSVITA - OLED
          </Link>
          <Link
            href="/"
            className="md:p-4 md:text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]"
          >
            ÉDITIONS LIMITÉES
          </Link>
          <Link
            href="/"
            className="md:p-4 md:text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]"
          >
            ACCESSOIRES
          </Link>
          <Link
            href="/"
            className="md:p-4 md:text-[15px] font-bebasNeue transition-colors hover:text-[--primary-color]"
          >
            FONDS D'ÉCRAN
          </Link>
        </nav>

        <div className="flex items-center gap-2 order-2 md:order-none">
          <Link href="/login">
            <Svg name="user" strokeWidth="1.75" width="18" height="18" />
          </Link>
          <Link href="/cart" className="py-3 px-4">
            <Svg name="cart" strokeWidth="1.5" width="18" height="18" />
          </Link>
        </div>
      </div>
    </header>
  );
}
