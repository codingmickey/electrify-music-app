import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import girlListeningToMusic from '../../images/girl_listening_to_music.svg';
import CustomButton from './Buttons/CustomButton';

export default function Body() {
  return (
    <div>
      <Box className="body-content" sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item lg={6} sx={{ pl: '11.7rem', my: '5rem' }}>
            <h2 className="body-header">Listening is everything</h2>
            <p className="body-text">
              Thousands of songs. No charges involved.
            </p>
            <CustomButton name="Sign Up" buttonColor="green-button" />
            <CustomButton name="Log In" buttonColor="green-button" />
          </Grid>
          <Grid item lg={6}>
            <img
              className="body-image"
              src={girlListeningToMusic}
              alt="girl listening to music"
            />
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
      <div className="body-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2941ab"
            fill-opacity="1"
            d="M0,256L34.3,245.3C68.6,235,137,213,206,192C274.3,171,343,149,411,160C480,171,549,213,617,213.3C685.7,213,754,171,823,154.7C891.4,139,960,149,1029,138.7C1097.1,128,1166,96,1234,96C1302.9,96,1371,128,1406,144L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="body-ending">
        <p className="body-ending-text">
          So why wait?
          <br />
          Sign Up now!
        </p>
        <p className="body-ending-text">
          <CustomButton
            name="Sign Up!"
            bgc="#b22c15"
            col="#fff"
            buttonColor="red-button"
          />
        </p>
      </div>
    </div>
  );
}
