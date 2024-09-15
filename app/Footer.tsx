// app/Footer.tsx
'use client';

import React, { useContext } from 'react';
import { Grid, IconButton, Typography, Link, Box } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import { MobileStateContext } from './MobileContext';



const Footer = () => {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);

  // Helper function to apply margins consistently
  const getMarginStyle = () => ({
    marginLeft: isMobile ? 0 : '3%',
    marginRight: isMobile ? 0 : '3%',
  });

  return (
    <Box sx={{ ...getMarginStyle() }}>
      <Grid
        container
        sx={{
          backgroundColor: 'black',
          p: 3,
          paddingTop: '60px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Logo Section */}
        <Grid item xs={12} md={4}>
          <Grid container justifyContent="center" alignItems="center">
            <Image src="/logo/KLIV_idrottsforening_logga_r01_TRANSPARENT.svg" height={200} width={200} alt="Logo" />
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              {/* Facebook Link */}
              <Link
                target="_blank"
                rel="noopener"
                href="https://sv-se.facebook.com/"
              >
                <IconButton color="secondary" aria-label="Facebook">
                  <FacebookRoundedIcon />
                </IconButton>
              </Link>
              {/* Instagram Link */}
              <Link
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/"
              >
                <IconButton color="secondary" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={12} md={4}>
          <Typography color="white" align={isMobile ? 'center' : 'left'}>
            Org-nummer: 802509-8842 <br />
            Kliv Idrottsförening <br />
            Tomtbergavägen 370A <br />
            145 71 Norsborg <br />
            info@kliv.se
          </Typography>
          <br />
        </Grid>



        {/* Social Media Section */}
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            padding: 1,
            m: 2,
          }}
        >
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
