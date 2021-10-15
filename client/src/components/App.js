import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Secret from './Secret';

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
    fetch('/')
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
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={Secret} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
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
