// app/ClientLayout.tsx
'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import NavBar from './navbar';
import MuiProvider from './MuiProvider';
import Footer from './Footer';
import { MobileStateProvider } from './MobileContext';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
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
  );
};

export default ClientLayout;
