import React, { useState } from 'react';
import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import { IMaskInput } from 'react-imask';
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  RadioGroup,
  Radio,
} from '@mui/material';
import CustomButton from './CustomButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

// Mobile Number
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="0000000000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    name: '',
    mobileNumber: '',
    role: '',
  });

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
    <div className="register">
      <h2 style={{ color: 'black', marginTop: 0, paddingTop: '0.83em' }}>
        <Link to="/">
          <OfflineBoltRoundedIcon
            sx={{ fontSize: '3.5rem', position: 'relative', top: '1rem' }}
          />
          Electrify
        </Link>
      </h2>
      <h1>Sign up with your email address</h1>
      <form action="/user/register" method="post">
        <FormControl
          sx={{ m: 1, width: '20rem' }}
          variant="outlined"
          action="/login"
          method="post"
        >
          {/* Email */}
          <p className="pre-label">What's your email?</p>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            required
            autoFocus="true"
          />

          {/* Password */}
          <p className="pre-label">Create a password</p>
          <TextField
            label="Password"
            helperText="Enter a 6 digit password"
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
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            aria-describedby="outlined-password-helper-text"
          />

          {/* Name */}
          <p className="pre-label">What should we call you?</p>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            value={values.name}
            required
            onChange={handleChange('name')}
          />

          {/* Mobile Number */}
          <p className="pre-label">What's your Mobile Number?</p>
          <TextField
            label="Mobile Number"
            value={values.mobileNumber}
            onChange={handleChange('mobileNumber')}
            name="mobileNumber"
            id="mobile-number"
            InputProps={{
              inputComponent: TextMaskCustom,
            }}
            inputProps={{
              type: 'tel',
              minlength: '10',
              maxlength: '10',
            }}
            required
          />

          {/* Fields */}
          <p className="pre-label">What's your role?</p>
          <RadioGroup row aria-label="role" name="role">
            <FormControlLabel
              value="user"
              onChange={handleChange('role')}
              control={<Radio required />}
              label="User"
            />
            <FormControlLabel
              value="artist"
              onChange={handleChange('role')}
              control={<Radio required />}
              label="Artist"
            />
          </RadioGroup>

          {/* Sign Up buttons */}
          <div className="register-signup-button"></div>
          <CustomButton
            name="Sign up"
            col="black"
            buttonColor="green-button"
            type="submit"
          />
          <br />
          <h4 className="pre-label" style={{ textAlign: 'center' }}>
            Have an account? <a href="/login">Log in</a>.
          </h4>
        </FormControl>
      </form>
    </div>
  );
}

export default Register;
