import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Dashboard from './Dashboard/Dashboard';
import Upload from './Dashboard/Upload';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ed760',
    },
    secondary: {
      main: '#000',
    },
    info: {
      main: '#fff',
    },
    success: {
      main: '#21e065',
    },
  },
  typography: {
    fontFamily: ['Montserrat, sans-serif'].join(','),
  },
});

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </nav>
      <ThemeProvider theme={theme}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

// Spotify Color Palette
// #1ed760 , #21e065
// #b22c15
// #2941ab
// Google OAuth Button - #1877f2
//
