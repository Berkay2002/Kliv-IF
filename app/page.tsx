// app/page.tsx
'use client';

import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, useMediaQuery, useTheme, Box, Divider, Button, TextField } from '@mui/material';
import Header from './header';
import News from './News';

const Home = () => {
  return (
    <>
      <Header logo="/logo/KLIV_idrottsforening_logga_r01_TRANSPARENT.svg" backgroundImageDesktop='/videos/KlivMontage720p.mp4' backgroundImageMobile='/videos/video1.mp4' />
      
      <Divider sx={{ my: 6 }} />

      <Container>
        


        {/* News */}
        
        <News />

        {/* Other sections of the homepage */}
      </Container>
    </>
  );
};

export default Home;
