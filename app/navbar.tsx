// app/NavBar.tsx
'use client';

// Importing necessary libraries and components
import React, { useState, useEffect, useContext, useRef } from 'react';
import { ListItem, List, Grid, Drawer, AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MobileStateContext } from './MobileContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SocialMediaIcons from './SocialMediaIcons';

// The main NavBar component
const NavBar = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the drawer's open/close state
  const [scroll, setScroll] = useState(false); // State to manage the scroll position for background color change
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext); // Context for device type
  const pathname = usePathname(); // Get the current pathname
  const underlineRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

// Effect to handle scroll event for background color change
useEffect(() => {
  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

// Effect to handle underline animation for active link
useEffect(() => {
  if (isDesktop && underlineRef.current) {
    const activeButton = document.querySelector(`a[href="${pathname}"] button`);
    if (activeButton) {
      const { offsetWidth, offsetLeft } = activeButton as HTMLElement;
      setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
    }
  }
}, [pathname, isDesktop]);

  // Pages array for navigation links
  const pages = [
    { name: 'HEM', path: '/' },
    { name: 'LOVAKTIVITETER', path: '/lovaktiviteter' },
    { name: 'JUDO', path: '/judo' },
    { name: 'KONTAKTA OSS', path: '/kontakta-oss' },
  ];

  // Function to toggle the drawer's open/close state
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
        backgroundColor: scroll ? 'rgba(0, 0, 0, 0.8)' : 'black',
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
                alt="Kliv Idrottsförening"
                width={isMobile || isDesktop ? 75 : 50}
                height={isMobile || isDesktop ? 75 : 50}
              />
            </a>
          </Link>
        </Box>
        {isDesktop ? (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', position: 'relative' }}>
            {pages.map((page) => (
              <Link href={page.path} key={page.name} passHref legacyBehavior>
                <a>
                  <Button
                    color="inherit"
                    sx={{
                      color: '#FFFFFF',
                    }}
                  >
                    {page.name}
                  </Button>
                </a>
              </Link>
            ))}
            <Box
              ref={underlineRef}
              sx={{
                position: 'absolute',
                bottom: 0,
                height: '2px',
                backgroundColor: '#FFFFFF',
                transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
                ...underlineStyle,
              }}
            />
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
