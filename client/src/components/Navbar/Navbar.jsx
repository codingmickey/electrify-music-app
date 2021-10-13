import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static" sx={{ px: '10%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ p: 0 }}
          >
            {/* <Link to="/"> */}
            <OfflineBoltRoundedIcon
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
            <Link to="/">Electrify</Link>
          </Typography>
          <Link to="/register">
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
            >
              Sign up
            </Button>
          </Link>
          <Link to="/login">
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
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
