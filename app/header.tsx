// app/header.tsx
'use client';

import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CustomWavyBackground from './CustomWavyBackground';
import { MobileStateContext } from './MobileContext';

{/* The Header will be able to display a title and a background image or video for either desktop or mobile*/}

interface HeaderProps {
  title?: string;
  logo?: string;
  backgroundImageMobile?: string;
  backgroundImageDesktop?: string;
  backgroundVideoMobile?: string;
  backgroundVideoDesktop?: string;
  backgroundPattern?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  backgroundImageMobile,
  backgroundImageDesktop,
  backgroundVideoMobile,
  backgroundVideoDesktop,
  backgroundPattern,
}) => {
  const { isMobile } = useContext(MobileStateContext);

  const backgroundSrc = isMobile
    ? backgroundVideoMobile || backgroundImageMobile
    : backgroundVideoDesktop || backgroundImageDesktop;

  const isVideo = backgroundSrc && backgroundSrc.endsWith('.mp4');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        {isVideo ? (
          <video
            src={backgroundSrc}
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <Image
            src={backgroundSrc || ''}
            alt="background"
            quality={100}
            priority
            layout="fill"
            style={{ objectFit: 'cover' }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color
        }}
      />
      {logo ? (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Image src={logo} alt="logo" width={isMobile ? 150 : 300} height={isMobile ? 150 : 300} />
        </Box>
      ) : (
        <Typography variant="h1" sx={{ position: 'relative', zIndex: 1, color: 'white', fontSize: isMobile ? '3rem' : '4rem' }}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <CustomWavyBackground />
      </Box>
    </Box>
  );
};

export default Header;