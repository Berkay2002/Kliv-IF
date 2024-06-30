"use client";

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Policy = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Integritetspolicy
        </Typography>
        <Typography variant="body1" paragraph>
          Kliv Idrottsförening (&ldquo;oss&rdquo;, &ldquo;vi&rdquo;, eller &ldquo;vår&rdquo;) driver webbplatsen Kliv Idrottsförening (hädanefter kallad &ldquo;Tjänsten&rdquo;).
        </Typography>
        <Typography variant="body1" paragraph>
          Denna sida informerar dig om våra policyer angående insamling, användning och avslöjande av personuppgifter när du använder vår tjänst och de val du har associerade med den informationen.
        </Typography>
        <Typography variant="body1" paragraph>
          Vi använder dina data för att tillhandahålla och förbättra tjänsten. Genom att använda tjänsten godkänner du insamling och användning av information i enlighet med denna policy.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Information Insamling och Användning
        </Typography>
        <Typography variant="body1" paragraph>
          Vi samlar in flera olika typer av information för olika syften för att tillhandahålla och förbättra vår tjänst till dig.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Typer av Insamlad Data
        </Typography>
        <Typography variant="h6" gutterBottom>
          Personuppgifter
        </Typography>
        <Typography variant="body1" paragraph>
          När du använder vår tjänst kan vi be dig att förse oss med viss personligt identifierbar information som kan användas för att kontakta eller identifiera dig (&ldquo;Personuppgifter&rdquo;). Personligt identifierbar information kan inkludera, men är inte begränsad till:
        </Typography>
        <ul>
          <li>Emailadress</li>
          <li>För- och efternamn</li>
          <li>Telefonnummer (om tillämpligt)</li>
          <li>Adress, Stat, Provins, Postnummer, Stad</li>
        </ul>
        <Typography variant="h6" gutterBottom>
          Användningsdata
        </Typography>
        <Typography variant="body1" paragraph>
          Vi kan också samla in information om hur tjänsten nås och används (&ldquo;Användningsdata&rdquo;). Denna användningsdata kan inkludera information såsom din dators IP-adress, webbläsartyp, webbläsarversion, sidorna på vår tjänst som du besöker, tid och datum för ditt besök, den tid du spenderar på dessa sidor, unika enhetsidentifierare och annan diagnostisk data.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Användning av Data
        </Typography>
        <Typography variant="body1" paragraph>
          Vi använder den insamlade datan för olika syften:
        </Typography>
        <ul>
          <li>För att tillhandahålla och underhålla tjänsten</li>
          <li>För att meddela dig om ändringar i vår tjänst</li>
          <li>För att möjliggöra att du kan delta i interaktiva funktioner i vår tjänst när du väljer att göra det</li>
          <li>För att ge kundsupport</li>
          <li>För att samla in analys eller värdefull information så att vi kan förbättra vår tjänst</li>
          <li>För att övervaka användningen av tjänsten</li>
          <li>För att upptäcka, förebygga och åtgärda tekniska problem</li>
        </ul>
        <Typography variant="h5" gutterBottom>
          Kontakta Oss
        </Typography>
        <Typography variant="body1" paragraph>
          Om du har några frågor om denna integritetspolicy, vänligen kontakta oss:
        </Typography>
        <ul>
          <li>Via e-post: spearidrottsforening@gmail.com</li>
        </ul>
      </Box>
    </Container>
  );
};

export default Policy;