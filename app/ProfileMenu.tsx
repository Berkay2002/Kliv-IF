"use client";

import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Typography, Divider, Modal, Box, useMediaQuery } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTheme } from '@mui/material/styles';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Switch from '@mui/material/Switch';

const ProfileMenu: React.FC = () => {
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [newsletterMail, setNewsletterMail] = useState(false);
  const [newsletterSMS, setNewsletterSMS] = useState(false);
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

  const handleSignOut = () => {
    window.location.href = '/api/auth/logout';
    handleClose();
  };

  const renderMenuItems = () => (
    <>
      <MenuItem disabled>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          Inställningar
        </Typography>
      </MenuItem>
      <MenuItem>
        <DeleteIcon />
        <Typography variant="body1" style={{ marginLeft: '10px' }}>
          Radera konto
        </Typography>
      </MenuItem>
      <MenuItem>
        <LockIcon />
        <Typography variant="body1" style={{ marginLeft: '10px' }}>
          Byt lösenord
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem disabled>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          Nyhetsbrev
        </Typography>
      </MenuItem>
      <MenuItem>
        <NotificationsIcon />
        <Typography variant="body1" style={{ marginLeft: '10px' }}>
          Mail
        </Typography>
        <Switch edge="end" />
      </MenuItem>
      <MenuItem>
        <NotificationsIcon />
        <Typography variant="body1" style={{ marginLeft: '10px' }}>
          SMS
        </Typography>
        <Switch edge="end" />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleSignOut}>
        <ExitToAppIcon />
        <Typography variant="body1" style={{ marginLeft: '10px', color: 'black' }}>
          Logga ut
        </Typography>
      </MenuItem>
    </>
  );

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <SettingsIcon style={{ color: 'white' }} />
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

export default withPageAuthRequired(ProfileMenu);
