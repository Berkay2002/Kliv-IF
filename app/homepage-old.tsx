// app/page.tsx
// The main file for the home page of the Kliv Idrottsförening website

'use client'; 
// Indicates that this file is client-side code, a Next.js directive

import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box, Divider, Link } from '@mui/material';
import Image from 'next/image';
import Header from './header';
import CustomWavyBackground from './headerWavyBackground';

// Import necessary components and libraries

// Array of member objects, each containing name, title, email, and image URL
const members = [
  {
    name: 'Muhammet Tozak',
    title: 'Ordförande',
    email: 'muhammet@klivif.se',
    image: '/sektionen/profile.jpg',
  },
  {
    name: 'Maria Rafaelius',
    title: 'Medlemsansvarig',
    email: 'Maria@klivif.se',
    image: '/sektionen/profile.jpg',
  },
  {
    name: 'Eldar Ljuca',
    title: 'Aktivitetsansvarig',
    email: 'Eldar@klivif.se',
    image: '/sektionen/profile.jpg',
  },
  {
    name: 'Binel Elias',
    title: 'PR-ansvarig',
    email: 'Binel@klivif.se',
    image: '/sektionen/profile.jpg',
  },
  {
    name: 'Leah Aybar',
    title: 'PR-ansvarig',
    email: 'Leah@klivif.se',
    image: '/sektionen/profile.jpg',
  },
];
// You can add or remove members here by modifying this array

const Home = () => {
  const imageStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };


  return (
    <>
      {/* Header component displaying the logo and background video */}

      <Container sx={{ mt: -2 }}>
        {/* Container for the main content with some margin adjustment */}
        <Box textAlign="left" mt={-5} mb={2}>
          <Image src="/logo/KLIV_idrottsforening_logga_r01_TRANSPARENT.svg" alt="Kliv Idrottsförening" width={150} height={150} />
        </Box>

        <Box mb={3} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Om oss
          </Typography>
          <Typography variant="h6" gutterBottom></Typography>
          <Typography variant="h6" gutterBottom>
            Kliv är en modern idrottsförening som introducerar och uppmuntrar idrottande bland barn och ungdomar i Norra Botkyrka.
          </Typography>

        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left">
              <Typography variant="h4" gutterBottom>
                Kliv styrs av unga för unga
              </Typography>
              <Typography variant="body1">
                Kliv har till skillnad från traditionella föreningar en ung styrelse som leder föreningens arbete med den unga målgruppen.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Image src="/lovaktiviteter/ungaForUnga.jpg" 
            alt="Unga för unga" 
            width={500} 
            height={300} 
            layout="responsive" 
            style={imageStyle} />
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Image 
            src="/lovaktiviteter/hjalpaBarn.png" 
            alt="Description" 
            width={500} 
            height={300} 
            layout="responsive" 
            style={imageStyle} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left">
              <Typography variant="h4" gutterBottom>
                Vi brinner för att hjälpa barn att hitta sin idrott
              </Typography>
              <Typography variant="body1">
                Under våra <Link href="/lovaktiviteter"><span 
                style={{ 
                  color: 'black', 
                  fontWeight: 'bold' 
                }}> Lovaktiviteter</span></Link> erbjuder vi många kostnadsfria och ledarledda idrottsaktiviteter för barn att prova på. För många barn blir det första gången som de får prova på en ny idrott. Genom att samarbeta med lokala idrottsföreningar hjälper vi föreningarna att introducera deras verksamheter för barn och deras föräldrar. 
                På detta vis möjliggör vi för barn i området att kliva in i idrottens värld.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left">
              <Typography variant="h4" gutterBottom>
                Vi erbjuder trygga och kostnadsfria aktiviteter för både barn och ungdomar
              </Typography>
              <Typography variant="body1">
                För många barn blir det första gången de testar en ny idrott. Genom samarbete med lokala idrottsföreningar hjälper vi föreningarna att introducera sina verksamheter för barn och deras föräldrar. Så möjliggör vi för barn i området att kliva in i idrottens värld.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Image src="/lovaktiviteter/lovaktiviteter2.png" 
              alt="Description" 
              width={500} 
              height={300} 
              layout="responsive" 
              style={imageStyle} />
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="column" sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left" mb={4}>
              <Typography variant="h4" gutterBottom>
                Spontanidrott
              </Typography>
              <Typography variant="body1">
              I nuläget väljer många barn och ungdomar att tidigt lämna idrotten på grund av krav som ställs av den traditionella förenings strukturen. 
              På Kliv strävar vi efter att erbjuda spontanidrott för ungdomar - utan krav som träningsnärvaro och matcher under helger              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box textAlign="left" mb={4}>
            <Typography variant="h4" gutterBottom>
              Engagera dig genom att bli medlem!
            </Typography>
            <Typography variant="body1">
              Vill du utöva ditt intresse inom idrott samtidigt som du gör någonting meningsfullt? Vill du hitta gemenskap med andra som brinner för samma sak som du? Bli medlem i Kliv idrottsförening! Hos oss får du möjligheten att engagera dig som ledare inom flera olika idrotter. Kontakta vår medlemsansvariga <Link href="mailto:Maria@klivif.se"><span style={{ color: 'black', fontWeight: 'bold' }}>Maria Rafaelius</span></Link> idag och kliv in i gemenskapen : )
            </Typography>
          </Box>
          </Grid>
        </Grid>

   
        <CustomWavyBackground  />

        {/* Divider to separate sections */}

        <Typography variant="h2" align="center" gutterBottom>
          STYRELSEN
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 2 }}>
          Hej! Här är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att <Link href="/kontakta-oss"><span style={{ color: 'black', fontWeight: 'bold' }}>kontakta oss</span></Link>.
        </Typography>

        <Box textAlign="center" mb={4}>
          {/* Group image of the members */}
          <Image
            src="/sektionen/group-example.jpg"
            alt="Gruppbild"
            width={612}
            height={392}
            layout="intrinsic"
            style={{ objectFit: 'cover' }}
          />
        </Box>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          {/* Individual member cards */}
          {members.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
              <Card>
                <CardMedia>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={312} // For 4:5 aspect ratio
                    layout="responsive"
                    style={{ objectFit: 'cover'}}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    {member.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
