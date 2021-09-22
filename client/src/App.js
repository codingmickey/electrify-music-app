import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data);

  return (
    <div>
      <Navbar />
      <br />
      <Login />
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
