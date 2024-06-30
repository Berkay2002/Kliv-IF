// app/user-data-deletion/page.tsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const UserDataDeletion = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          User Data Deletion
        </Typography>
        <Typography variant="body1" paragraph>
          At Kliv Idrottsförening, we respect your privacy and provide you with the right to request the deletion of your personal data.
        </Typography>
        <Typography variant="body1" paragraph>
          If you would like to request the deletion of your data, please contact us at the email address below:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: spearidrottsforening@gmail.com
        </Typography>
        <Typography variant="body1" paragraph>
          We will process your request and delete your data within a reasonable timeframe, in accordance with applicable laws and regulations.
        </Typography>
        <Typography variant="body1" paragraph>
          Please note that some data may be retained for legal or administrative purposes.
        </Typography>
      </Box>
    </Container>
  );
};

export default UserDataDeletion;
