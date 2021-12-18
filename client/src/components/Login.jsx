import React, { useEffect, useState } from 'react';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import axios from 'axios';
import CustomButton from './CustomButton';

import GoogleButton from 'react-google-button';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    name: '',
    mobileNumber: '',
    role: '',
  });
  let history = useHistory();

  useEffect(() => {
    let reqOptions = {
      url: '/verify',
      method: 'GET',
    };
    axios.request(reqOptions).then(function (response) {
      console.log(response.data.msg);
      if (response.data.msg === 'Access Granted') {
        history.push('/dashboard');
      }
    });
  });

  // Handle change of any state
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Password Modifier
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <h2>
        <Link to="/">
          <OfflineBoltRoundedIcon
            sx={{ fontSize: '5rem', position: 'relative', top: '1.5rem' }}
          />
          Electrify
        </Link>
      </h2>
      <hr />

      <GoogleButton
        className="google-button"
        label="Continue with Google"
        onClick={() => {
          window.location.href = 'http://localhost:3001/user/auth/google';
        }}
      />
      <h3>OR</h3>

      <form action="/user/login" method="post">
        <FormControl sx={{ m: 1, width: '20rem' }} variant="outlined">
          {/* Email */}
          <p className="pre-label">Email address</p>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
            required
            autoFocus="true"
          />
          {/* Password */}
          <p className="pre-label">Password</p>
          <TextField
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            name="password"
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            aria-describedby="outlined-password-helper-text"
          />

          <div className="register-signup-button"></div>
          <CustomButton
            name="Log In"
            col="black"
            buttonColor="green-button"
            type="submit"
          />
          <br />
          <h4 className="pre-label" style={{ textAlign: 'center' }}>
            Don't have an account? <a href="/register">Sign Up</a>.
          </h4>
        </FormControl>
      </form>
    </div>
  );
}

export default Login;
