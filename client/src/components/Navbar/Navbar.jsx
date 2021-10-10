import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ed760',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static" sx={{ px: '10%' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ pr: 0 }}
            >
              <OfflineBoltRoundedIcon
                sx={{ fontSize: '3.5rem', paddingRight: 0 }}
              />
            </IconButton>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                fontSize: '1.7rem',
                letterSpacing: '-1.2px',
              }}
            >
              Electrify
            </Typography>
            <Button
              className="navbar-links"
              size="large"
              sx={{
                px: 2.3,
                py: 3.3,
                ml: 2.3,
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
              color="inherit"
              onClick={props.signUp}
            >
              Sign up
            </Button>
            <Button
              className="navbar-links"
              size="large"
              sx={{
                px: 2.3,
                py: 3.3,
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
              color="inherit"
            >
              Login in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
