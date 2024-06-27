'use client';

import React, { useEffect } from 'react';
import { Container, Grid, Typography, Button, TextField, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../header';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  useEffect(() => {
    // Ensure useRouter is called only on client-side
    if (!router) return;
  }, [router]);

  const onSubmit = async (data: any) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      alert('Invalid email or password');
    } else {
      alert('Login successful');
      router.push('/');
    }
  };

  return (
    <>
      <Header title="LOGIN" backgroundImageDesktop='/sektionen/sektionenImage.jpeg' backgroundImageMobile='/sektionen/styrelsen-mobil.jpeg' />
      <Divider sx={{ my: 6 }} />
      <Container sx={{ backgroundColor: '#ffffff', py: 8, maxWidth: 'lg' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px' }}>
          Logga In
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                label="Lösenord"
                type="password"
                {...register('password', { required: 'Lösenord är obligatoriskt' })}
                margin="normal"
                error={!!errors.password}
                helperText={errors.password ? String(errors.password.message) : ''}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                Logga In
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
