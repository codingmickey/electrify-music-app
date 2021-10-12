import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

function App() {
  const [data, setData] = useState(null);
  const [signUpPage, setSignUpPage] = useState(false);
  const [logInPage, setLogInPage] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  function handleSignUpPage() {
    setSignUpPage(true);
  }
  function handleLogInPage() {
    setLogInPage(true);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        {signUpPage ? (
          <Register />
        ) : logInPage ? (
          <Login />
        ) : (
          <Home signUpPage={handleSignUpPage} logInPage={handleLogInPage} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;

// Spotify Color Palette
// #1ed760 , #21e065
// #b22c15
// #2941ab
// Google OAuth Button - #1877f2
//
