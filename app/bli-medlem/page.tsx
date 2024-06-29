"use client";

import React from 'react';
import { Container, Grid, Typography, Button, TextField, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../header';

const BliMedlem = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Något gick fel. Försök igen.');
      }

      const result = await response.json();
      console.log(result);
      alert('Tack för din ansökan! Vi kommer att kontakta dig snart.');
    } catch (error) {
      console.error(error);
      alert('Något gick fel. Försök igen.');
    }
  };

  return (
    <>
      <Header title='BLI MEDLEM' backgroundImageDesktop='/videos/KlivMontage720p.mp4' backgroundImageMobile='/videos/video1.mp4' />
      <Divider sx={{ my: 6 }} />
      <Container sx={{ backgroundColor: '#ffffff', py: 8, maxWidth: 'lg' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px' }}>
          Bli Medlem
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
                label="E-post"
                type="email"
                {...register('email', { required: 'E-post är obligatoriskt', pattern: { value: /^\S+@\S+$/i, message: 'Ogiltig e-postadress' } })}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email ? String(errors.email.message) : ''}
              />
              <TextField
                fullWidth
                label="Telefonnummer"
                {...register('phone', { required: 'Telefonnummer är obligatoriskt' })}
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone ? String(errors.phone.message) : ''}
              />
              <TextField
                fullWidth
                label="Lösenord"
                type="password"
                {...register('password', { required: 'Lösenord är obligatoriskt', minLength: { value: 6, message: 'Lösenordet måste vara minst 6 tecken' } })}
                margin="normal"
                error={!!errors.password}
                helperText={errors.password ? String(errors.password.message) : ''}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                Bli Medlem
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BliMedlem;
