// pages/delete-account.tsx
"use client";

import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const DeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete account');
      }
  
      alert('Account deleted successfully');
      router.push('/');
    } catch (error) {
      // Check if error is an instance of Error and has a message property
      if (error instanceof Error) {
        alert(error.message);
      } else {
        // Handle cases where the error is not an instance of Error
        alert('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 10, backgroundColor: '#ffffff', py: 8, maxWidth: 'md' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Radera Konto
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" align="center" gutterBottom>
            Är du säker på att du vill radera ditt konto? Denna åtgärd kan inte ångras.
          </Typography>
          <Button onClick={handleDeleteAccount} variant="contained" color="error" fullWidth sx={{ mt: 3 }} disabled={loading}>
            {loading ? 'Raderar Konto...' : 'Radera Konto'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeleteAccount;
