'use client';


import { Inter } from "next/font/google";

import "./globals.css";
import Sidebar from "@/app/components/sidebar/Sidebar"; // Importando o componente Sidebar
const inter = Inter({ subsets: ["latin"] });
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet"/>

        <title> My site </title>
      </head>

      
      <body className={`${inter.className} flex h-screen`}>
        <Sidebar />
        <div className="flex-1"> 
          {children}
        </div>
      </body>
    </html>
  );
}
