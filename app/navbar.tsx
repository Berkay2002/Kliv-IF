"use client";

import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, List, ListItem, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MobileStateContext } from './MobileContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SocialMediaIcons from './SocialMediaIcons';
import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    signOut();
  };

  const pages = [
    { name: 'HEM', path: '/' },
    { name: 'OM OSS', path: '/sektionen' },
    { name: 'LOVAKTIVITETER', path: '/lovaktiviteter' },
    { name: 'SPORTSTRUCK', path: '/sportstruck' },
    { name: 'JUDO', path: '/judo' },
    { name: 'BLI MEDLEM', path: '/bli-medlem' },
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
      color="transparent" 
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
          <Box sx={{ display: 'flex', gap: 2 }}>
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
            {session ? (
              <Button color="inherit" onClick={handleLogout} sx={{ color: '#FFFFFF' }}>
                Logga Ut
              </Button>
            ) : (
              <Link href="/login" passHref legacyBehavior>
                <a>
                  <Button color="inherit" sx={{ color: '#FFFFFF' }}>
                    Logga In
                  </Button>
                </a>
              </Link>
            )}
          </Box>
        ) : (
          <>
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
                    {session ? (
                      <ListItem sx={{ justifyContent: 'center' }}>
                        <Button color="inherit" onClick={handleLogout} sx={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
                          Logga Ut
                        </Button>
                      </ListItem>
                    ) : (
                      <ListItem sx={{ justifyContent: 'center' }}>
                        <Link href="/login" passHref>
                          <Button color="inherit" sx={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
                            Logga In
                          </Button>
                        </Link>
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
