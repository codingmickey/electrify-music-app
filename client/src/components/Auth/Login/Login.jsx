import React from 'react';
import GoogleButton from 'react-google-button';

function Login() {
  return (
    <GoogleButton
      className="google-button"
      label="Continue with Google"
      onClick={() => {
        window.location.href = 'http://localhost:3001/auth/google';
      }}
    />
  );
}

export default Login;
