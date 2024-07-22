'use client';

import React from 'react';
import { Container, Grid, Typography, Button, TextField, Divider, Card, CardMedia, CardContent, Box, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../header';
import Image from 'next/image';

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

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Kontakt = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('http://localhost:5000/api/kontakta-oss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      const result = await response.json();
      console.log(result);
      alert('Thank you for your message! We will contact you soon.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Header title='KONTAKTA OSS' backgroundImageDesktop='/videos/KlivMontage720p.mp4' backgroundImageMobile='/videos/video1.mp4' />
      <Container className="kontakta-oss" sx={{ backgroundColor: '#ffffff', py: 8, maxWidth: 'lg' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Kontakta oss
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Namn"
                {...register('name', { required: 'Namn är obligatoriskt' })}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name ? String(errors.name.message) : ''}
              />
              <TextField
                fullWidth
                label="Mail Address"
                type="email"
                {...register('email', { required: 'E-post är obligatoriskt', pattern: { value: /^\S+@\S+$/i, message: 'Ogiltig e-postadress' } })}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email ? String(errors.email.message) : ''}
              />
              <TextField
                fullWidth
                label="Mobil Nummer"
                {...register('phone', { required: 'Telefonnummer är obligatoriskt' })}
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone ? String(errors.phone.message) : ''}
              />
              <TextField
                fullWidth
                label="Meddelande"
                {...register('message', { required: 'Meddelande är obligatoriskt' })}
                margin="normal"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? String(errors.message.message) : ''}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                Skicka meddelande
              </Button>
            </form>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />
        {/* Divider to separate sections */}

        <Typography variant="h2" align="center" gutterBottom>
          STYRELSEN
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 2 }}>
          Hej! Här är styrelsen för Kliv Idrottsförening. Om du har några frågor eller funderingar är du välkommen att kontakta oss.
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
        <Divider sx={{ my: 6 }} />

      </Container>
    </>
  );
};

export default Kontakt;
