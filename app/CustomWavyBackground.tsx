import React from 'react';
import { Box } from '@mui/material';

const CustomWavyBackground = ({ children, backgroundColor }: { children: React.ReactNode; backgroundColor: string; }) => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      backgroundColor, 
      paddingTop: '50px', 
      paddingBottom: '50px', 
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-50px',
        left: 0,
        right: 0,
        height: '100px',
        background: `url('/path-to-your-top-wave-image.svg') top center no-repeat`,
        backgroundSize: 'cover',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-50px',
        left: 0,
        right: 0,
        height: '100px',
        background: `url('/path-to-your-bottom-wave-image.svg') bottom center no-repeat`,
        backgroundSize: 'cover',
      },
    }}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default CustomWavyBackground;
