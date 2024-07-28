// app/page.tsx
// The main file for the home page of the Kliv Idrottsförening website

'use client'; 
// Indicates that this file is client-side code, a Next.js directive

import React, { useContext, useEffect } from 'react';
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
import { Oswald } from 'next/font/google';
import { styled } from '@mui/system';



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

const oswald = Oswald({ subsets: ['latin'] });

const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: `${oswald.style.fontFamily}, "Arial Narrow", sans-serif`,
  fontWeight: 800,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  lineHeight: 1,
}));

const Home = () => {
  const theme = useTheme();
  const { isMobile, isIpad } = useContext(MobileStateContext);

  useEffect(() => {
    if (!isMobile) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, [isMobile]);

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
      <Box
        sx={{
          backgroundColor: '#f4c430',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '3%',
          ...getMarginStyle(),
        }}
      >
        <HeaderText variant={isMobile ? "h2" : "h1"} sx={{ color: '#ffffff', fontSize: isMobile ? '3rem' : isIpad ? '4rem' : '5rem', marginBottom: 2 }}>
          KLIV
        </HeaderText>
        <HeaderText variant={isMobile ? "h3" : "h2"} sx={{ color: '#000000', fontSize: isMobile ? '2rem' : isIpad ? '3rem' : '4rem' }}>
          IN I IDROTTENS VÄRLD
        </HeaderText>
      </Box>

      <Box sx={{ backgroundColor: 'white' }}>
        {/* VEM ÄR VI section */}
        <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
          <Container maxWidth={isMobile ? 'xl' : 'lg'}>
            <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}>
              <Grid item xs={12} md={6}>
                <HeaderText variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: '#000000' }}>
                  VEM ÄR VI
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

        {/* VÅR VISION section */}
        <Box sx={{ backgroundColor: '#f4c430', py: isMobile ? 5 : 10, ...getMarginStyle() }}>
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
                      KOSTNADSFRITT FÖR BARN OCH UNGDOMAR
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
        <Box py={0} sx={{ backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
          <Box sx={{ width: '100%', margin: '0 auto' }}>
            <Slider {...settings}>
              <div className="carousel-image-wrapper">
                <Image src="/lovaktiviteter/lovaktiviteter1.png" alt="Image 1" layout="fill" className="carousel-image" />
              </div>
              <div className="carousel-image-wrapper">
                <Image src="/lovaktiviteter/lovaktiviteter2.png" alt="Image 2" layout="fill" className="carousel-image" />
              </div>
              <div className="carousel-image-wrapper">
                <Image src="/lovaktiviteter/lovaktiviteter3.png" alt="Image 3" layout="fill" className="carousel-image" />
              </div>
              {/* Add more images as needed */}
            </Slider>
          </Box>
          <style jsx>{`
            .carousel-image-wrapper {
              position: relative;
              width: 100%;
              height: 0;
            padding-bottom: ${isMobile ? '56.25%' : '42.86%'}; /* 16:9 aspect ratio for mobile, 21:9 for tablet/desktop */
              overflow: hidden;
            }

            .carousel-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
            }
          `}</style>
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

        <Box sx={{ backgroundColor: '#f4c430', py: isMobile ? 1 : 13, ...getMarginStyle() }}></Box>

        {/* VÅRT FANTASTISKA STYRELSE section */}
        {isMobile || isIpad ? (
          <Box sx={{ position: 'relative', backgroundColor: '#f0f0f0', ...getMarginStyle() }}>
            <Box 
              sx={{ 
                backgroundColor: '#f4c430',
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
                      VÅRT
                    </HeaderText>
                    <HeaderText 
                      variant={isMobile ? "h3" : "h2"} 
                      sx={{ 
                        fontWeight: 'bold', 
                        fontSize: isMobile ? '2.5rem' : '3.5rem',
                        color: '#f4c430',
                        mb: 1
                      }}
                    >
                      FANTASTISKA
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
                      STYRELSE
                    </HeaderText>
                  </Box>
                </Grid>

                {/* Description for mobile and iPad */}
                <Grid item xs={12}>
                  <Typography variant={isMobile ? "body1" : "h6"}>
                    Hej! Här är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att <Link href="/kontakta-oss"><span style={{ color: '#dba436', fontWeight: 'bold' }}>kontakta oss</span></Link>.
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
                  VÅRT
                </HeaderText>
                <HeaderText variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: '#dba436' }}>
                  FANTASTISKA
                </HeaderText>
                <HeaderText variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: 'black' }}>
                  STYRELSE
                </HeaderText>
              </Box>
              <Box sx={{ maxWidth: '50%' }}>
                <Typography variant="h5">
                  Hej! Här är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att <Link href="/kontakta-oss"><span style={{ color: 'black', fontWeight: 'bold' }}>kontakta oss</span></Link>.
                </Typography>
              </Box>
            </Container>

            <Container>
              <Grid container spacing={2} justifyContent="center">
                {members.map((member, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
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