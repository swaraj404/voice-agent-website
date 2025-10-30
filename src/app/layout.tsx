import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display, Raleway, Orbitron, Cinzel, Roboto_Mono} from "next/font/google";
import "./globals.css";

// Primary font for body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-primary',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Heading font for titles
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Elegant font for hero section
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Voice Agent - Next Gen AI Voice Solutions",
  description: "Futuristic voice agent technology for modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${raleway.variable} ${orbitron.variable} ${cinzel.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
