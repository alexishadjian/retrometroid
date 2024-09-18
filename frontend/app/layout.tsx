import Header from "@/components/header";


// FONTS IMPORT
import { Roboto, Bebas_Neue } from "next/font/google";
const roboto = Roboto({ 
    subsets: ["latin"],
    style: ['normal', 'italic'],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
    display: 'swap',
});
const bebasNeue = Bebas_Neue({ 
    subsets: ["latin"],
    style: ['normal'],
    weight: ["400"],
    variable: "--font-bebasNeue",
    display: 'swap',
});

// CSS IMPORT
import "./globals.css";


// METADATA
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Retrometroid',
  description: 'Retrometroid, le site de vente de consoles rétro',
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} ${roboto.variable} ${bebasNeue.variable} antialiased`} >
                <Header />
                {children}
            </body>
        </html>
    );
}
