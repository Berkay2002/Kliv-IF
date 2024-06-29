// pages/change-password.tsx
"use client";

import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      alert('Password changed successfully');
      router.push('/');
    } catch (error) {
      alert((error as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 10, backgroundColor: '#ffffff', py: 8, maxWidth: 'md' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Byt Lösenord
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Gammalt Lösenord"
              type="password"
              {...register('oldPassword', { required: 'Gammalt lösenord är obligatoriskt' })}
              margin="normal"
              error={!!errors.oldPassword}
              helperText={errors.oldPassword ? String(errors.oldPassword.message) : ''}
            />
            <TextField
              fullWidth
              label="Nytt Lösenord"
              type="password"
              {...register('newPassword', { required: 'Nytt lösenord är obligatoriskt', minLength: { value: 6, message: 'Lösenordet måste vara minst 6 tecken' } })}
              margin="normal"
              error={!!errors.newPassword}
              helperText={errors.newPassword ? String(errors.newPassword.message) : ''}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }} disabled={loading}>
              {loading ? 'Byter Lösenord...' : 'Byt Lösenord'}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChangePassword;
