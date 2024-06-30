"use client";

import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Menu, MenuItem, IconButton, Typography, Avatar, Box, Divider, Modal, Button, useMediaQuery } from '@mui/material';
import { Settings, ExitToApp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const ProfileMenu: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isMobileOrTablet) {
      setModalOpen(true);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setModalOpen(false);
  };

  const handleLogout = () => {
    window.location.href = '/api/auth/logout';
    handleClose();
  };

  const renderMenuItems = () => (
    <>
      <MenuItem disabled>
        <Box display="flex" alignItems="center">
          <Avatar src={user?.picture || ''} alt={user?.name || ''} />
          <Box ml={2}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
              {user?.name}
            </Typography>
            <Typography variant="body2">{user?.email}</Typography>
          </Box>
        </Box>
      </MenuItem>
      <Divider />
      <MenuItem>
        <Link href="/settings" passHref>
          <Box display="flex" alignItems="center">
            <Settings />
            <Typography variant="body1" style={{ marginLeft: '10px' }}>
              Inställningar
            </Typography>
          </Box>
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <Box display="flex" alignItems="center">
          <ExitToApp />
          <Typography variant="body1" style={{ marginLeft: '10px', color: 'black' }}>
            Logga ut
          </Typography>
        </Box>
      </MenuItem>
    </>
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Avatar src={user?.picture || ''} alt={user?.name || ''} />
      </IconButton>
      {!isMobileOrTablet ? (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {renderMenuItems()}
        </Menu>
      ) : (
        <Modal open={modalOpen} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 2,
            }}
          >
            {renderMenuItems()}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ProfileMenu;
