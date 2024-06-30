// app/terms-of-service/page.tsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Kliv Idrottsförening! By using our website, you agree to comply with and be bound by the following terms and conditions of use.
        </Typography>
        <Typography variant="h5" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </Typography>
        <Typography variant="h5" gutterBottom>
          2. Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Please refer to our Privacy Policy for information on how we collect, use, and disclose information from our users.
        </Typography>
        <Typography variant="h5" gutterBottom>
          3. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify or replace these Terms at any time. If the alterations constitute a material change to the Terms, we will notify you by posting an announcement on our site.
        </Typography>
        <Typography variant="h5" gutterBottom>
          4. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms, please contact us at:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: spearidrottsforening@gmail.com
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
