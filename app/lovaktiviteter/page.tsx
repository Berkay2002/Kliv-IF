// client 
"use client";

// app/pages/lovaktiviteter.tsx
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Divider 
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

const Lovaktiviteter = () => {
  const imageStyle: React.CSSProperties = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    <Header title="LOVAKTIVITETER" backgroundImageDesktop='/sportstruck/sportstruck1.png' backgroundImageMobile='/sektionen/styrelsen-mobil.jpeg' />
    <Container sx={{ mt: 4 }}>

      <Typography variant="h3" gutterBottom align="center">
        Lovaktiviteter
      </Typography>
      <Typography variant="body1" paragraph>
        Under loven erbjuder vi en trygg plats för hundratals barn som får prova 
        på ledarledda idrottsaktiviteter helt kostnadsfritt. För många barn blir 
        det första gången som de får prova på en ny idrott. Genom att samarbeta med 
        lokala idrottsföreningar hjälper vi föreningarna att introducera deras verksamheter 
        för barn och deras föräldrar. På detta vis möjliggör vi för barn i området att kliva in i idrottens värld!
        Håll dig uppdaterad inför nästa lovaktivitet på våra sociala medier!
      </Typography>

      <Timeline position="alternate">
        {activities.map((event: any, index: number) => (
          <TimelineItem key={index}>
            
            <TimelineOppositeContent>
              <Typography variant="h6" color="black">
                {event.event}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: 'black' }} />
                {index < activities.length - 1 && <TimelineConnector sx={{ bgcolor: 'black' }} />}
            </TimelineSeparator>

            <TimelineContent>
              <Card sx={{ mb: 4, maxWidth: 345, mx: 'auto' }}>
                <CardMedia>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={345}
                    height={230} // For consistent size
                    layout="responsive"
                    style={imageStyle}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="textPrimary">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </>
);
};

export default Lovaktiviteter;