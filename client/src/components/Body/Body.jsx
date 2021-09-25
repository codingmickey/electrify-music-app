import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import girlListeningToMusic from '../../images/girl_listening_to_music.svg';

const styles = {};

export default function FullWidthGrid() {
  return (
    <div className="body-content">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item lg={6} sx={{ pl: '14rem' }}>
            <h2>Listening is everything</h2>
            <p>Millions of songs and podcasts. No credit card needed.</p>
          </Grid>
          <Grid item lg={6}>
            <img
              height={400}
              src={girlListeningToMusic}
              alt="girl listening to music"
            />
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
