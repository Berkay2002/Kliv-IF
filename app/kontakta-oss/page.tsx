"use client";

import React from 'react';
import { Container, Grid, Typography, Button, TextField, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../header';

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
      <Divider sx={{ my: 6 }} />
      <Container className="kontakta-oss" sx={{ backgroundColor: '#ffffff', py: 8, maxWidth: 'lg' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px' }}>
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
      </Container>
    </>
  );
};

export default Kontakt;
