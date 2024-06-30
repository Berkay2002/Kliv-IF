// NavBar.tsx
"use client";

import React, { useState, useEffect, useContext } from 'react';
import { ListItem, List, Grid, Drawer, AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MobileStateContext } from './MobileContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SocialMediaIcons from './SocialMediaIcons';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pages = [
    { name: 'HEM', path: '/' },
    { name: 'OM OSS', path: '/sektionen' },
    { name: 'LOVAKTIVITETER', path: '/lovaktiviteter' },
    { name: 'SPORTSTRUCK', path: '/sportstruck' },
    { name: 'JUDO', path: '/judo' },
    { name: 'KONTAKTA OSS', path: '/kontakta-oss' },
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scroll ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        transition: 'background-color 0.3s',
        width: '100%'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref legacyBehavior>
            <a>
              <Image
                src="/logo/transparant.svg"
                alt="Alby Rådet"
                width={isMobile || isDesktop ? 75 : 50}
                height={isMobile || isDesktop ? 75 : 50}
              />
            </a>
          </Link>
        </Box>
        {isDesktop ? (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {pages.map((page) => (
              <Link href={page.path} key={page.name} passHref legacyBehavior>
                <a>
                  <Button
                    color="inherit"
                    sx={{ borderBottom: pathname === page.path ? '2px solid #FFEB3B' : 'none', color: '#FFFFFF' }}
                  >
                    {page.name}
                  </Button>
                </a>
              </Link>
            ))}
            {!user && (
              <>
                <Link href="/api/auth/signup" passHref legacyBehavior>
                  <a>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FFD700',
                        color: '#000000',
                        '&:hover': {
                          backgroundColor: '#FFC107',
                        },
                      }}
                    >
                      BLI MEDLEM
                    </Button>
                  </a>
                </Link>
                <Link href="/api/auth/login" passHref legacyBehavior>
                  <a>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#FFD700',
                        color: '#FFD700',
                        '&:hover': {
                          borderColor: '#FFC107',
                          color: '#FFC107',
                        },
                      }}
                    >
                      Logga in
                    </Button>
                  </a>
                </Link>
              </>
            )}
            {user && <ProfileMenu />}
          </Box>
        ) : (
          <>
            <IconButton color="inherit" sx={{ marginRight: '8px' }}>
              {user ? <ProfileMenu /> : null}
            </IconButton>
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(!isOpen)}
              sx={{
                transition: 'transform 0.3s',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: 'white',
                fontSize: '2.5rem',
              }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              sx={{ zIndex: 101 }}
              open={isOpen}
              onClose={toggleDrawer(false)}
              transitionDuration={600}
              PaperProps={{
                sx: isMobile
                  ? { width: "100%", backgroundColor: "black" }
                  : { width: "50%", backgroundColor: "black" },
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '100%', p: 3 }}
              >
                <Box
                  sx={{ width: isMobile ? '100%' : 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {pages.map((page, index) => (
                      <ListItem key={index} sx={{ justifyContent: 'center' }}>
                        <Link href={page.path} passHref>
                          <Button
                            color="inherit"
                            sx={{
                              borderBottom: pathname === page.path ? '2px solid #FFEB3B' : 'none',
                              color: '#FFFFFF',
                              fontSize: '1.25rem',
                            }}
                          >
                            {page.name}
                          </Button>
                        </Link>
                      </ListItem>
                    ))}
                    {!user && (
                      <>
                        <ListItem sx={{ justifyContent: 'center' }}>
                          <Link href="/api/auth/login" passHref>
                            <Button
                              variant="outlined"
                              sx={{
                                borderColor: '#FFD700',
                                color: '#FFD700',
                                fontSize: '1.25rem',
                                '&:hover': {
                                  borderColor: '#FFC107',
                                  color: '#FFC107',
                                },
                              }}
                            >
                              Logga in
                            </Button>
                          </Link>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>
                          <Link href="/api/auth/signup" passHref>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: '#FFD700',
                                color: '#000000',
                                fontSize: '1.25rem',
                                '&:hover': {
                                  backgroundColor: '#FFC107',
                                },
                              }}
                            >
                              BLI MEDLEM
                            </Button>
                          </Link>
                        </ListItem>
                        
                      </>
                    )}
                    {user && (
                      <ListItem sx={{ justifyContent: 'center' }}>
                        <ProfileMenu />
                      </ListItem>
                    )}
                  </List>
                  <Box sx={{ textAlign: 'center', mt: "0.5rem" }}>
                    <Image
                      alt="Kliv Idrottsförening"
                      src="/logo/KLIV_idrottsforening_logga_r01_TRANSPARENT.svg"
                      width={150}
                      height={150}
                    />
                    <SocialMediaIcons />
                  </Box>
                </Box>
              </Grid>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
