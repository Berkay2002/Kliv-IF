// Client
'use client'; 

import React, { useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import Header from '../header';
import dynamic from 'next/dynamic';


// Styling for the Google Map container
const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

// Coordinates for Kärsbyhallen, Norsborg
const center = {
  lat: 59.2452,  // Replace with the exact latitude for Kärsbyhallen
  lng: 17.8077  // Replace with the exact longitude for Kärsbyhallen
};

// Dynamically import GoogleMap and LoadScript components to ensure they are loaded only on the client side
const LoadScript = dynamic(() => import('@react-google-maps/api').then((mod) => mod.LoadScript), { ssr: false });
const GoogleMap = dynamic(() => import('@react-google-maps/api').then((mod) => mod.GoogleMap), { ssr: false });
const Marker = dynamic(() => import('@react-google-maps/api').then((mod) => mod.Marker), { ssr: false });



const Judo = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Inline styles for images
  const imageStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width : '100%',
    height : 400
  };

  return (
    <>
      <Header title="JUDO" backgroundImageDesktop='/judo/judo2.png' backgroundImageMobile='/judo/mobilJudo.jpg' />
      <Container sx={{ mt: 4, mb: 6 }}>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box textAlign="left">
            <Typography variant="h4" gutterBottom>
              Vår tränare
            </Typography>
            <Typography variant="body1" paragraph>
              Vår tränare är ingen annan än Raja Fernando som tävlat inom judo internationell och har en livstids erfarenhet av judo. Raja Fernando graderades under 2023 till 6:e dan svartbälte och befinner sig bland de högst graderade personerna i norden!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <Image 
              src="/judo/raja.jpg"
              alt="Raja Fernando"
              layout="responsive"
              width={400}
              height={600}
              style={imageStyle} />
          </Box>
        </Grid>
      </Grid>

        <Grid container spacing={4} direction="column" alignItems="left" sx={{ mb: 6 }}>
          <Grid item xs={12}>
            <Box textAlign="left">
            <Typography variant="h4" gutterBottom>
            Träningsgrupp och träningsschema
            </Typography>
            <Typography variant="body1" paragraph>
              Vi erbjuder för tillfället träningar för barn 7-12 år. Träningarna hålls på måndagar 17:30-19:30 i Kårsbyhallen.
            </Typography>
            <Typography variant="body1" paragraph>
              Du är välkommen att ta med ditt barn och att testa på judo kostnadsfritt under ett pass - se bara till att kontakta vår medlemsansvariga innan du dyker upp.
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left">
            <Typography variant="h4" gutterBottom>
            Träningsavgifter och betalningsinformation
            </Typography>
            <Typography variant="body1" paragraph>
              Träningsavgiften för samtliga barn är 750kr per termin och medlemsavgiften ingår i denna avgift.
            </Typography>
            <Typography variant="body1" paragraph>
              Träningsavgiften betalas in till föreningens bankgiro (5220-6166) senast 2 månader efter påbörjad termin. Märk betalningen med för- och efternamn på barnet, samt vilken termin betalningen gäller (exempelvis HT-2024).
            </Typography>
          </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ mb: 6, mt: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Lokal
              </Typography>
              <Typography variant="body1" paragraph>
                Våra lokaler är nyrenoverade och ligger i Kårsbyhallen (Norsborg).
              </Typography>
              <Typography variant="body1" paragraph>
                Kårsbyhallen ligger på 3-minuters promenadavstånd från Norsborg tunnelbana.
              </Typography>
              <Typography variant="body1" paragraph>
                Du kan även parkera 5-timmar gratis med p-skiva strax utanför hallen.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ mt: 0, height: 400 }}>
              <LoadScript
                id="script-loader"
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}
                onLoad={() => setMapLoaded(true)}
              >
                {mapLoaded && (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                )}
              </LoadScript>
            </Box>
          </Grid>
        </Grid>


      </Container>
    </>
  );
};

export default Judo;