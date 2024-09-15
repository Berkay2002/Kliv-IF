'use client';

import React, { useContext } from 'react';
import { Container, Typography, Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Header from '../header';
import { MobileStateContext } from '../MobileContext';
import dynamic from 'next/dynamic';
import { styled } from '@mui/system';
import '../globals.css';

const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: `"Oswald", "Arial Narrow", sans-serif`,
  fontWeight: 800,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  lineHeight: 1,
}));

const LoadScript = dynamic(() => import('@react-google-maps/api').then((mod) => mod.LoadScript), { ssr: false });
const GoogleMap = dynamic(() => import('@react-google-maps/api').then((mod) => mod.GoogleMap), { ssr: false });
const Marker = dynamic(() => import('@react-google-maps/api').then((mod) => mod.Marker), { ssr: false });

const Judo = () => {
  const { isMobile, isIpad } = useContext(MobileStateContext);
  const theme = useTheme();
  const [mapLoaded, setMapLoaded] = React.useState(false);

  const getMarginStyle = () => ({
    marginLeft: isMobile || isIpad ? 0 : '3%',
    marginRight: isMobile || isIpad ? 0 : '3%',
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const center = {
    lat: 59.2452,
    lng: 17.8077
  };

  return (
    <>
      <Header
        title="JUDO"
        description="Välkommen till judoavdelningen"
        imageUrl={isMobile ? '/judo/judo1.png' : '/judo/judo1.png'}
      />
      <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
          <Container maxWidth={isMobile ? 'sm' : 'lg'}>
            <Grid container spacing={isMobile ? 3 : 5} alignItems="center">
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h4" : "h3"} gutterBottom>
                  VÅR TRÄNARE
                </HeaderText>
                <Typography variant={isMobile ? "body1" : "h6"} paragraph>
                  Vår tränare är ingen annan än Raja Fernando som tävlat inom judo internationellt och har en livstids erfarenhet av judo. Raja Fernando graderades under 2023 till 6:e dan svartbälte och befinner sig bland de högst graderade personerna i norden!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
                  <Image 
                    src="/judo/raja.jpg"
                    alt="Raja Fernando"
                    width={400}
                    height={600}
                    layout="responsive"
                    objectFit="cover"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#ADD8E6', ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h4" : "h3"} gutterBottom sx={{ color: 'white' }}>
                  TRÄNINGSGRUPP OCH SCHEMA
                </HeaderText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant={isMobile ? "body1" : "h6"} paragraph sx={{ color: 'white' }}>
                  Vi erbjuder för tillfället träningar för barn 7-12 år. Träningarna hålls på måndagar 17:30-19:30 i Kårsbyhallen.
                </Typography>
                <Typography variant={isMobile ? "body1" : "h6"} paragraph sx={{ color: 'white' }}>
                  Du är välkommen att ta med ditt barn och att testa på judo kostnadsfritt under ett pass - se bara till att kontakta vår medlemsansvariga innan du dyker upp.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
          <Container maxWidth={isMobile ? 'sm' : 'lg'}>
            <Grid container spacing={isMobile ? 3 : 5}>
              <Grid item xs={12}>
                <HeaderText variant={isMobile ? "h4" : "h3"} gutterBottom>
                  TRÄNINGSAVGIFTER OCH BETALNINGSINFORMATION
                </HeaderText>
                <Typography variant={isMobile ? "body1" : "h6"} paragraph>
                Träningsavgiften för samtliga barn är 750kr per termin och medlemsavgiften ingår i denna avgift.
                Träningsavgiften betalas in till föreningens bankgiro (5220-6166) senast 2 månader efter påbörjad termin. Märk betalningen med för- och efternamn på barnet, samt vilken termin betalningen gäller (exempelvis HT-2024).
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>


        <Box sx={{ backgroundColor: '#ADD8E6', py: isMobile ? 1 : 13, ...getMarginStyle() }}></Box>

        

        {/* LOKAL */}
        {isMobile || isIpad ? (
          <Box sx={{ position: 'relative', backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
            <Box 
              sx={{ 
                backgroundColor: '#ADD8E6',
                height: isMobile ? '150px' : '200px',
                width: '100%'
              }} 
            />
            
            <Container maxWidth={isMobile ? 'xl' : 'lg'} sx={{ position: 'relative', mt: isMobile ? '-50px' : '-150px' }}>
              <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={12}>
                  
                  <Box>
                    <HeaderText 
                      variant={isMobile ? "h3" : "h2"} 
                      sx={{ 
                        fontWeight: 'bold', 
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        color: 'black',
                        mb: 1
                      }}
                    >
                      VAR
                    </HeaderText>
                    <HeaderText 
                      variant={isMobile ? "h3" : "h2"} 
                      sx={{ 
                        fontWeight: 'bold', 
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        color: '#ADD8E6',
                        mb: 1
                      }}
                    >
                      VI
                    </HeaderText>
                    <HeaderText 
                      variant={isMobile ? "h3" : "h2"} 
                      sx={{ 
                        fontWeight: 'bold', 
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        color: 'black',
                        mb: 1
                      }}
                    >
                      HITTAS
                    </HeaderText>
                    
                  </Box>
                </Grid>

                {/* Description for mobile and iPad */}
                <Grid item xs={12}>
                  <Typography variant={isMobile ? "body1" : "h6"}>
                    Våra lokaler är nyrenoverade och ligger i Kårsbyhallen (Norsborg). Kårsbyhallen ligger på 3-minuters promenadavstånd från Norsborg tunnelbana. Du kan även parkera 5-timmar gratis med p-skiva strax utanför hallen.
                  </Typography>
                </Grid>
              </Grid>

              
            </Container>
          </Box>
        ) : (
          // Desktop version 
          <Box py={13} sx={{ backgroundColor: '#f0f0f0', marginLeft: '3%', marginRight: '3%', position: 'relative' }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Box sx={{ position: 'relative', top: '-8rem' }}>
                <HeaderText variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: 'black' }}>
                  VAR
                </HeaderText>
                <HeaderText 
                  variant={isMobile ? "h3" : "h2"} 
                  sx={{ 
                    fontWeight: 'bold', 
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    color: '#ADD8E6',
                    mb: 1
                  }}
                >
                  VI
                </HeaderText>
                <HeaderText 
                  variant={isMobile ? "h3" : "h2"} 
                  sx={{ 
                    fontWeight: 'bold', 
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    color: 'black',
                    mb: 2
                  }}
                >
                  HITTAS
                </HeaderText>
                
              </Box>
              <Box sx={{ maxWidth: '50%' }}>
                <Typography variant="h5">
                  Våra lokaler är nyrenoverade och ligger i Kårsbyhallen (Norsborg). Kårsbyhallen ligger på 3-minuters promenadavstånd från Norsborg tunnelbana. Du kan även parkera 5-timmar gratis med p-skiva strax utanför hallen.
                </Typography>
              </Box>
            </Container>

            
          </Box>
        )}

        {/* Map section */}
        <Box sx={{ 
          width: isMobile || isIpad ? '100%' : '94%', 
          ...getMarginStyle(),
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            paddingTop: isMobile || isIpad ? '30%' : '25%', // Reduced height for both mobile and desktop
          }
        }}>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}
            onLoad={() => setMapLoaded(true)}
            id="google-map-script"
          >
            {mapLoaded && (
              <GoogleMap
                mapContainerStyle={{
                  ...mapContainerStyle,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '100%',
                }}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </LoadScript>
        </Box>

      </Box>
    </>
  );
};

export default Judo;