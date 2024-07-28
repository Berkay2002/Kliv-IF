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
    image: '/events/spring.jpg',
  },
  {
    event: 'Påsklov',
    title: 'Påsklovskul',
    description: 'Speciella aktiviteter under påsklovet med fokus på roliga och engagerande idrottsaktiviteter för alla åldrar.',
    image: '/events/easter.webp',
  },
  {
    event: 'Sommarlov',
    title: 'Sportstruck & Sportoteket',
    description: 'Under sommarlovet erbjuder vi en rad olika idrottsaktiviteter för barn och ungdomar för att hålla dem aktiva och engagerade.',
    image: '/events/summer.jpg',
  },
  {
    event: 'Höstlov',
    title: 'Höstlovskul',
    description: 'Höstlovet är fullt av spännande idrottsaktiviteter som är designade för att vara roliga och utmanande.',
    image: '/events/autumn.jpg',
  },
  {
    event: 'Jullov',
    title: 'Jullovskul',
    description: 'Under jullovet arrangerar vi speciella aktiviteter som är inriktade på att fira högtiden genom idrott och gemenskap.',
    image: '/events/winter.jpg',
  },
];

return (
  <>
    <Header title="LOVAKTIVITETER" description={''} />
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
      <Box py={isMobile ? 5 : 10} sx={{ backgroundColor: '#f0f0f0', ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Grid container spacing={isMobile ? 3 : 5}>
            <Grid item xs={12} md={6}>
              <Typography variant={isMobile ? "h4" : "h3"} gutterBottom>
                LOVAKTIVITETER
              </Typography>
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

      <Box sx={{ backgroundColor: '#dba436', py: isMobile ? 5 : 7, ...(isMobile || isIpad ? {} : getMarginStyle()) }}>
        <Container maxWidth={isMobile ? 'sm' : 'lg'}>
          <Grid container spacing={isMobile ? 3 : 5}>
            <Grid item xs={12} md={4}>
              <Typography variant={isMobile ? "h3" : "h2"} gutterBottom sx={{ color: 'white' }}>
                VAD VI ARRANGERAR
              </Typography>
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