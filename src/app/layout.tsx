import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { ApplicationsProvider } from "@/context/ApplicationsContext";

import Header from '../components/layout/header/Header'
import Sidebar from '../components/layout/sidebar/Sidebar'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "ApplyFlow | Job Application Tracker",
  description:
    "Organize your job applications and manage your career journey with ApplyFlow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${inter.variable} ${jakarta.variable} min-h-full flex w-full`}>
        <ApplicationsProvider>
          <Sidebar />
          <div className="flex flex-col w-[85%]">
            <Header />
            {children}
          </div>
        </ApplicationsProvider>

      </body>
    </html>
  );
}
