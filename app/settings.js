// pages/settings.js
'use client';

import React from 'react';
import { Container, TextField, FormControlLabel, Checkbox, Button, Typography, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (data) => {
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

  const handleDeleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
      });

      if (response.ok) {
        alert('Account deleted successfully');
        window.location.href = '/api/auth/logout';
      } else {
        alert('Failed to delete account');
      }
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px' }}>
        Settings
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Name"
          defaultValue={user.name}
          {...register('name')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          defaultValue={user.email}
          {...register('email')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          defaultValue={user.phone}
          {...register('phone')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register('password')}
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox {...register('newsletter')} defaultChecked={user.newsletter} />}
          label="Subscribe to newsletter"
        />
        <FormControlLabel
          control={<Checkbox {...register('notifications.email')} defaultChecked={user.notifications?.email} />}
          label="Email Notifications"
        />
        <FormControlLabel
          control={<Checkbox {...register('notifications.sms')} defaultChecked={user.notifications?.sms} />}
          label="SMS Notifications"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Save Settings
        </Button>
      </form>
      <Divider sx={{ my: 6 }} />
      <Button variant="contained" color="secondary" fullWidth sx={{ mt: 3 }} onClick={handleDeleteAccount}>
        Delete Account
      </Button>
    </Container>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Settings;
