import { Favicon } from "@/public/images";
import Header from "@/components/header";
import Footer from "@/components/footer";


// FONTS IMPORT
import { Roboto, Bebas_Neue } from "next/font/google";
const roboto = Roboto({ 
    subsets: ["latin"],
    style: ['normal', 'italic'],
    weight: ["400", "500", "700"],
    display: 'swap',
    variable: "--font-roboto",
});
const bebasNeue = Bebas_Neue({ 
    subsets: ["latin"],
    style: ['normal'],
    weight: ["400"],
    display: 'swap',
    variable: "--font-bebasNeue",
});

// CSS IMPORT
import "./globals.css";


// METADATA
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Retrometroid',
  description: 'Retrometroid, le site de vente de consoles rétro',
  icons: [
    {
        rel: "icon",
        type: "image/png",
        url: Favicon.src,
    },
  ],
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} ${roboto.variable} ${bebasNeue.variable} antialiased`} >
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
