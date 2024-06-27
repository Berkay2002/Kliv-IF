"use client";

import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './navbar';
import MuiProvider from './MuiProvider';
import Footer from './Footer';
import { MobileStateProvider } from './MobileContext';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <MuiProvider>
            <MobileStateProvider> 
              <>
                <NavBar />
                {children}
                <Footer />
              </>
            </MobileStateProvider>
          </MuiProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
