import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import Home from './Home/Home';

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
    fontFamily: ['Montserrat, sans-serif'].join(','),
  },
});

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

{
  /* 
  {signUpPage ? (
    <Register />
  ) : logInPage ? (
    <Login />
  ) : (
    <Home signUpPage={handleSignUpPage} logInPage={handleLogInPage} />
  )}
; */
}

export default App;

// Spotify Color Palette
// #1ed760 , #21e065
// #b22c15
// #2941ab
// Google OAuth Button - #1877f2
//
