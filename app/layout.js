import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FooterComponent } from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasound ",
  description: "La plataforma destinada a ser la número uno en Latinoamérica para comercializacion de beats. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Providers>
          {/* <div className="indexz">
            <Navbar />
          </div> */}

          {children}
          {/* <FooterComponent /> */}
        </Providers>
      </body>
    </html>
  );
}
