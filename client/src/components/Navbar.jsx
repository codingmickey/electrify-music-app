import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar-responsive"
        color="secondary"
        position="static"
        sx={{ px: '10%' }}
      >
        <Toolbar className="toolbar-responsive">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="iconButton-navbar"
          >
            {/* <Link to="/"> */}
            <OfflineBoltRoundedIcon
              className="roundedbutton-navbar"
              sx={{ fontSize: '3.5rem', paddingRight: 0 }}
            />
            {/* </Link> */}
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
          <Link to="/register">
            <Button
              className="navbar-links nav-register-button"
              size="large"
              sx={{
                px: 2.3,
                py: 3.3,
                ml: 2.3,
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
              color="inherit"
            >
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              className="navbar-links nav-login-button"
              size="large"
              sx={{
                px: 2.3,
                py: 3.3,
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
              color="inherit"
            >
              Log in
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
