import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Deltacom Security - Reliable Security Systems in Washington DC Metro',
  description: 'The Most Reliable Security System Provider In The Washington, DC Metro Area. Smart, end-to-end security and IT solutions.',
  keywords: 'security systems, CCTV, access control, cybersecurity, Intrusion & Fire Protection, Washington DC',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}