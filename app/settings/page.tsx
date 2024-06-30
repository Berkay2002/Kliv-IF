// app/settings/page.tsx
'use client';

import React from 'react';
import { Container, TextField, Button, Typography, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response = await fetch('/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Settings updated successfully');
    } else {
      alert('Failed to update settings');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px', marginTop: '8rem' }}>
        Settings
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          defaultValue={user?.email}
          {...register('email')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          defaultValue={user?.phoneNumber}
          {...register('phoneNumber')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="First Name"
          defaultValue={user?.given_name}
          {...register('firstName')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last Name"
          defaultValue={user?.family_name}
          {...register('lastName')}
          margin="normal"
        />
        {!user?.picture && (
          <TextField
            fullWidth
            label="Profile Image URL"
            defaultValue={user?.picture}
            {...register('profileImageUrl')}
            margin="normal"
          />
        )}
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register('password')}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Save Settings
        </Button>
      </form>
      <Divider sx={{ my: 6 }} />
      <Button variant="contained" color="secondary" fullWidth sx={{ mt: 3 }} onClick={() => router.push('/api/auth/logout')}>
        Delete Account
      </Button>
    </Container>
  );
};

export default Settings;
