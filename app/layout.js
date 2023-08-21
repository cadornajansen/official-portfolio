import "cal-sans";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jansen Cadorna",
  description: "Creative Student Freelancer | Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="relative flex flex-col w-full justify-center items-center">
          <Header />

          <main></main>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
