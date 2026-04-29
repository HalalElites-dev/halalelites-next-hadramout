import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import type { Metadata } from "next";
import { Tajawal, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-heading", // It's good practice to name the variable after the font
  subsets: ["latin", "arabic"], // Tajawal supports Arabic, so include it
  weight: ['200', '300', '400', '500', '700', '800', '900'] // Specify weights as an array of strings
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hadramouttoledo.com'),
  title: {
    default: "Hadramout Restaurant | Toledo's Authentic Yemeni & Middle Eastern Cuisine",
    template: "%s | Hadramout Restaurant Toledo"
  },
  description: "Experience the best authentic Yemeni and Middle Eastern cuisine in Toledo. Discover our delicious Mandi, Haneeth, Fahsah, Zurbian, and more Halal food.",
  keywords: ["Toledo Yemeni food", "Middle Eastern restaurant Toledo", "Mandi", "Haneeth", "Fahsah", "Zurbian", "Halal food Toledo", "Hadramout menu", "Authentic Yemeni Cuisine", "Arabic food Toledo"],
  openGraph: {
    title: "Hadramout Restaurant | Toledo's Authentic Yemeni & Middle Eastern Cuisine",
    description: "Experience the best authentic Yemeni and Middle Eastern cuisine in Toledo. Discover our delicious Mandi, Haneeth, Fahsah, Zurbian, and more Halal food.",
    url: '/',
    siteName: 'Hadramout Restaurant',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hadramout Restaurant | Authentic Yemeni Cuisine in Toledo",
    description: "Experience the best authentic Yemeni and Middle Eastern cuisine in Toledo. Halal food, Mandi, Haneeth, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tajawal.variable} ${openSans.variable} antialiased`} suppressHydrationWarning
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Header />
             <LocalBusinessSchema />
             {children}
             <Footer />
  
          </ThemeProvider>
      </body>
    </html>
  );
}
