// app/page.tsx
// The main file for the home page of the Kliv Idrottsförening website

'use client'; 
// Indicates that this file is client-side code, a Next.js directive

import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box, Button, Link, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MobileStateContext } from './MobileContext';
import { styled } from '@mui/system';
import './globals.css';
import { calculateMinHeight } from './CalculateMinHeight';



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

const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: `"Oswald", "Arial Narrow", sans-serif`,
  fontWeight: 800,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  lineHeight: 1,
}));

const Home = () => {
  const theme = useTheme();
  const { isMobile, isIpad } = useContext(MobileStateContext);
  const [minHeight, setMinHeight] = useState<number>(0);


  useEffect(() => {
    if (!isMobile) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, [isMobile]);

  useEffect(() => {
    const imageSources = [
      '/lovaktiviteter/lovaktiviteter1.png',
      '/lovaktiviteter/lovaktiviteter2.png',
      '/lovaktiviteter/lovaktiviteter3.png',
    ];

    calculateMinHeight(imageSources).then((minHeight) => {
      setMinHeight(minHeight);
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

    // Helper function to apply margins consistently
    const getMarginStyle = () => ({
      marginLeft: isMobile ? 0 : '3%',
      marginRight: isMobile ? 0 : '3%',
  });

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Box Container with Margin */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            ...getMarginStyle(), // Apply margin to the box
            overflow: 'hidden',
          }}
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <source src="/videos/KlivMontage720p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content with Yellow Overlay */}
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(173, 216, 230, 0.35)', // Yellow overlay with opacity
              zIndex: 1,
              padding: '3%',
            }}
          >
            {/* Logo of the Header */}
            <Image
              src="/logo/transparant-svart.svg" 
              alt="Kliv Logo"
              width={isMobile ? 200 : 300} 
              height={isMobile ? 100 : 150} 
              style={{ zIndex: 2 }} 
            />

            {/* Subheading Text */}
            <HeaderText variant={isMobile ? 'h3' : 'h2'} sx={{ mt: 2, color: '#000000', fontSize: isMobile ? '2rem' : isIpad ? '3rem' : '4rem' }}>
              IN I IDROTTENS VÄRLD
            </HeaderText>
          </Box>
        </Box>
      </Box>


      <Box sx={{ backgroundColor: 'white' }}>
        {/* VILKA ÄR VI ? */}
        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: '#000000' }}>
                  VILKA VI ÄR 
                </HeaderText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Vi är en modern idrottsförening som introducerar och uppmuntrar idrottande bland barn och ungdomar i Norra Botkyrka.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* VÅR VISION */}
        <Box sx={{ backgroundColor: '#ADD8E6', py: isMobile ? 5 : 10, ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={4}>
                <HeaderText variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: 'white' }}>
                  VÅR VISION
                </HeaderText>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={3} textAlign="center">
                    <EmojiPeopleIcon sx={{ fontSize: '3rem', mb: 1, color: 'white' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      KOSTNADSFRIA LOVAKTIVITETER FÖR BARN OCH UNGDOMAR
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} textAlign="center">
                    <SecurityIcon sx={{ fontSize: '3rem', mb: 1, color: 'white' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      TRYGG OCH SÄKER MILJÖ FÖR ALLA
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} textAlign="center">
                    <SchoolIcon sx={{ fontSize: '3rem', mb: 1, color: 'white' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      BEMANNAD MED UTBILDADE LEDARE
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} textAlign="center">
                    <GroupWorkIcon sx={{ fontSize: '3rem', mb: 1, color: 'white' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      SAMARBETE MED LOKALA FÖRENINGAR
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* UNGT LEDARSKAP section */}
        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: '#000000' }}>
                  UNGT LEDARSKAP
                </HeaderText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Till skillnad från traditionella föreningar har vi en ung styrelse som leder föreningens arbete med den unga målgruppen.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Carousel Section */}
        <Box py={0} sx={{ backgroundColor: '#f0f0f0', height: '100%', ...getMarginStyle() }}>
          <Box sx={{ width: '100%', margin: '0 auto', height: '100%' }}>
            <Slider {...settings}>
              <div className="carousel-image-wrapper" style={{ minHeight: `${minHeight}px` }}>
                <img
                  src="/lovaktiviteter/lovaktiviteter1.png"
                  alt="Image 1"
                  className="carousel-image"
                />
              </div>
              <div className="carousel-image-wrapper" style={{ minHeight: `${minHeight}px` }}>
                <img
                  src="/lovaktiviteter/lovaktiviteter2.png"
                  alt="Image 2"
                  className="carousel-image"
                />
              </div>
              <div className="carousel-image-wrapper" style={{ minHeight: `${minHeight}px` }}>
                <img
                  src="/lovaktiviteter/lovaktiviteter3.png"
                  alt="Image 3"
                  className="carousel-image"
                />
              </div>
              {/* Add more images as needed */}
            </Slider>
          </Box>
        </Box>


        {/* VÅR STRÄVAN section */}
        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: '#000000' }}>
                  VÅR STRÄVAN
                </HeaderText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  I nuläget väljer många barn och ungdomar att tidigt sluta med idrott på grund av krav som ställs av den traditionella föreningsmodellen.
                  På Kliv Idrottsförening strävar vi efter att erbjuda en mer flexibel och spontan idrottsmiljö - utan krav som träningsnärvaro och matcher varje helg.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ backgroundColor: '#ADD8E6', py: isMobile ? 1 : 13, ...getMarginStyle() }}></Box>

        {/* VÅRT FANTASTISKA STYRELSE section */}
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
                      VÅR
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
                      STYRELSE
                    </HeaderText>
                  </Box>
                </Grid>

                {/* Description for mobile and iPad */}
                <Grid item xs={12}>
                  <Typography variant={isMobile ? "body1" : "h6"}>
                  Vi är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att <Link href="/kontakta-oss"><span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>kontakta oss</span></Link>!
                  </Typography>
                </Grid>
              </Grid>

              {/* Member cards for mobile and iPad */}
              <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                {members.map((member, index) => (
                  <Grid item key={index} xs={12} sm={6}>
                    <Card>
                      <CardMedia>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={250}
                          height={312}
                          layout="responsive"
                          style={{ objectFit: 'cover' }}
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
          </Box>
        ) : (
          // Desktop version 
          <Box py={13} sx={{ backgroundColor: '#f0f0f0', marginLeft: '3%', marginRight: '3%', position: 'relative' }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Box sx={{ position: 'relative', top: '-8rem' }}>
                <HeaderText variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: 'black' }}>
                  VÅR
                </HeaderText>
                <HeaderText variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: '#ADD8E6' }}>
                  STYRELSE
                </HeaderText>
              </Box>
              <Box sx={{ maxWidth: '50%' }}>
                <Typography variant="h5">
                Vi är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att <Link href="/kontakta-oss"><span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>kontakta oss</span></Link>!
                </Typography>
              </Box>
            </Container>

            <Container>
              <Grid container spacing={2} justifyContent="center">
              {members.map((member, index) => (
                <Grid 
                  item 
                  key={index} 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  lg={2.4}
                  sx={{
                    mb: isMobile && index === members.length - 1 ? 5 : 0, // Add margin bottom for the last card on mobile
                  }}
                >
                    <Card>
                      <CardMedia>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={250}
                          height={312}
                          layout="responsive"
                          style={{ objectFit: 'cover' }}
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
            
          </Box>
        )}

        
      </Box>
    </>
  );
};

export default Home;