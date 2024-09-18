import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

//FONT
import { Roboto } from "next/font/google";
const roboto = Roboto({ 
    subsets: ["latin"],
    style: ['normal', 'italic'],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ 
    subsets: ["latin"],
    style: ['normal'],
    weight: ["400"],
    variable: "--font-bebasNeue",
});


export const metadata: Metadata = {
  title: 'Retro',
  description: 'Retro',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            {/* <body className={`${geistSans.variable} antialiased`}> */}
            <body className={roboto.className} >
                {children}
            </body>
        </html>
    );
}
