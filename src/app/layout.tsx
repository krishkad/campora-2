import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = localFont({
  src: [
    {
      path: './fonts/playfair-display/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/playfair-display/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-playfair-display', // Optional custom CSS variable
});


export const metadata: Metadata = {
  title: "Campora",
  description: "Looking for a getaway in nature? Campora is the perfect spot to relax, explore, and have fun. With cozy accommodations, exciting activities, and amazing views, we've got everything you need for a great time outdoors. Come join us and make some awesome memories! 🌲✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased overflow-auto scrollbar-hide`}
      >
        <main className="relative w-full">

          <main className="w-full">
            {children}
          </main>

        </main>
      </body>
    </html>
  );
}
