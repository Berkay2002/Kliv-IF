// client 
"use client";

import React, { useContext } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Header from '../header';
import Image from 'next/image';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import EggIcon from '@mui/icons-material/Egg';
import SportsBasketBallIcon from '@mui/icons-material/SportsBasketball';
import HikingIcon from '@mui/icons-material/Hiking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { MobileStateContext } from '../MobileContext';
import { styled } from '@mui/system';
import '../globals.css';

const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: `"Oswald", "Arial Narrow", sans-serif`,
  fontWeight: 800,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
  lineHeight: 1,
}));


const Lovaktiviteter = () => {
  const { isMobile, isIpad } = useContext(MobileStateContext);
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getMarginStyle = () => ({
    marginLeft: isMobile || isIpad ? 0 : '3%',
    marginRight: isMobile || isIpad ? 0 : '3%',
  });

  const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
  };

const activities = [
  {
    event: 'Sportlov',
    title: 'Sportlovskul',
    description: 'Vår mobila idrottsplats som kommer till olika platser under loven och erbjuder en rad olika idrottsaktiviteter för barn och ungdomar.',
    image: '/lovaktiviteter/lovaktiviteter2.png',
  },
  {
    event: 'Påsklov',
    title: 'Påsklovskul',
    description: 'Speciella aktiviteter under påsklovet med fokus på roliga och engagerande idrottsaktiviteter för alla åldrar.',
    image: '/lovaktiviteter/lovaktiviteter4.jpg',
  },
  {
    event: 'Sommarlov',
    title: 'Sportstruck & Sportoteket',
    description: 'Under sommarlovet erbjuder vi en rad olika idrottsaktiviteter för barn och ungdomar för att hålla dem aktiva och engagerade.',
    image: '/sportstruck/sportstruck1.png',
  },
  {
    event: 'Höstlov',
    title: 'Höstlovskul',
    description: 'Höstlovet är fullt av spännande idrottsaktiviteter som är designade för att vara roliga och utmanande.',
    image: '/sportstruck/sportstruck2.png',
  },
  {
    event: 'Jullov',
    title: 'Jullovskul',
    description: 'Under jullovet arrangerar vi speciella aktiviteter som är inriktade på att fira högtiden genom idrott och gemenskap.',
    image: '/lovaktiviteter/lovaktiviteter1.png',
  },
];

return (
  <>
    <Header
        title="LOVAKTIVITETER"
        description="Vi erbjuder en trygg plats för barn som får prova på ledarledda idrottsaktiviteter helt kostnadsfritt."
        imageUrl={isMobile ? '/lovaktiviteter/lovaktiviteter1.png' : '/lovaktiviteter/lovaktiviteter1.png'}
      />
      
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
      <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Grid container spacing={isMobile ? 3 : 5}>
            <Grid item xs={12} md={6}>
              <HeaderText variant={isMobile ? "h5" : "h4"} gutterBottom>
                VÅRA LOVAKTIVITETER HÄLPER BARN ATT KOMMA IGÅNG MED IDROTT
              </HeaderText>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
                Under loven erbjuder vi en trygg plats för hundratals barn som får prova 
                på ledarledda idrottsaktiviteter helt kostnadsfritt. För många barn blir 
                det första gången som de får prova på en ny idrott. Genom att samarbeta med 
                lokala idrottsföreningar hjälper vi föreningarna att introducera deras verksamheter 
                för barn och deras föräldrar. På detta vis möjliggör vi för barn i området att kliva in i idrottens värld!
                Håll dig uppdaterad inför nästa lovaktivitet på våra sociala medier!                
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#ADD8E6', py: isMobile ? 5 : 7, ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Grid container spacing={isMobile ? 3 : 5}>
            <Grid item xs={12} md={4}>
              <HeaderText variant={isMobile ? "h4" : "h3"} gutterBottom sx={{ color: 'white' }}>
                VAD VI ARRANGERAR
              </HeaderText>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={isMobile ? 2 : 5}>
                {[
                  { icon: DownhillSkiingIcon, text: "SPORTLOVSKUL" },
                  { icon: EggIcon, text: "PÅSKLOVSKUL" },
                  { icon: SportsCricketIcon, text: "SPORTSTRUCK" },
                  { icon: SportsBasketBallIcon, text: "SPORTOTEKET" },
                  { icon: HikingIcon, text: "HÖSTLOVSKUL" },
                  { icon: AcUnitIcon, text: "JULLOVSKUL" },
                ].map((item, index) => (
                  <Grid item xs={6} sm={4} key={index} textAlign="center">
                    <item.icon sx={{ fontSize: isMobile ? '2rem' : '3rem', mb: 1, color: 'white' }} />
                    <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: 'white' }}>
                      {item.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Grid container spacing={isMobile ? 3 : 5}>
            <Grid item xs={12} md={6}>
              <HeaderText variant={isMobile ? "h5" : "h4"} gutterBottom>
                TRYGGA OCH KOSTNADSFRIA LOVAKTIVITETER
              </HeaderText>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
              Våra kostnadsfria lovverksamheter fungerar även som en trygg plats för barn i området att vända sig till under loven. Lovaktiviteterna är alltid kravlösa, kostnadsfria och bemannade med utbildade idrottsledare.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      

      <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Timeline position={isMobile ? "right" : "alternate"}>
          {activities.map((event, index) => (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent>
                  <Typography variant={isMobile ? "h5" : "h4"} color="black">
                    {event.event}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: 'black' }} />
                {index < activities.length - 1 && <TimelineConnector sx={{ bgcolor: 'black' }} />}
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: isMobile ? 2 : 0, maxWidth: isMobile ? '100%' : 345, mx: 'auto' }}>
                  <CardMedia>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={345}
                      height={230}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </CardMedia>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant={isMobile ? "h6" : "h5"}>{event.title}</Typography>
                    {isMobile && (
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        {event.event}
                      </Typography>
                    )}
                    <Typography variant="body2" color="textPrimary">
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  </>
);
};

export default Lovaktiviteter;