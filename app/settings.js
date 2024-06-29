// pages/settings.js
'use client';

import React from 'react';
import { Container, TextField, FormControlLabel, Checkbox, Button, Typography, Divider, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getSession, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data: session } = useSession();
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
        signOut();
      } else {
        alert('Failed to delete account');
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '20px' }}>
        Settings
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Name"
          defaultValue={session?.user?.name}
          {...register('name')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          defaultValue={session?.user?.email}
          {...register('email')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone"
          defaultValue={session?.user?.phone}
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
          control={<Checkbox {...register('newsletter')} defaultChecked={session?.user?.newsletter} />}
          label="Subscribe to newsletter"
        />
        <FormControlLabel
          control={<Checkbox {...register('notifications.email')} defaultChecked={session?.user?.notifications?.email} />}
          label="Email Notifications"
        />
        <FormControlLabel
          control={<Checkbox {...register('notifications.sms')} defaultChecked={session?.user?.notifications?.sms} />}
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Settings;
