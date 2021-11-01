import { FormControl, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import axios from 'axios';

function Upload() {
  const [values, setValues] = useState({
    // Single File upload hooks
    singleFile: {},
    selectSingleFile: false,
    singleTitle: '',
    singleArtist: '',

    // Multiple File upload hooks
    multipleFiles: [],
    selectMultipleFiles: false,
    multipleTitle: '',
    multipleArtist: '',

    uploadStatus: Number,
  });

  const handleChange = (prop) => (event) => {
    if (prop === 'singleFile')
      setValues({
        ...values,
        singleFile: event.target.files[0],
        selectSingleFile: true,
      });
    else if (prop === 'multipleFiles')
      setValues({
        ...values,
        multipleFiles: event.target.files,
        selectMultipleFiles: true,
      });
    else setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    // converting into the form object
    const formData = new FormData();
    formData.append('title', values.singleTitle);
    formData.append('artist', values.singleArtist);
    formData.append('file', values.singleFile);

    // making request to the server
    let reqOptions = {
      url: '/music/singleFile',
      method: 'POST',
      data: formData,
    };
    axios.request(reqOptions).then(function (response) {
      console.log(response);
      setValues({ ...values, uploadStatus: response.status });
    });

    // Setting the hook back to default values
    setValues({
      ...values,
      singleFile: {},
      selectSingleFile: false,
      singleTitle: '',
      singleArtist: '',
    });
    event.preventDefault();
  };

  const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return `${parseFloat((bytes / Math.pow(1000, index)).toFixed(dm))} ${
      sizes[index]
    }`;
  };

  return (
    <div className="dashboard">
      <Grid container spacing={2} className="dashboard-singleFile">
        <Grid item sm={6}>
          <h1> Single upload</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              // Single song file Input
              id="music-upload"
              name="file"
              type="file"
              required
              inputProps={{
                style: { color: 'white' },
                accept: 'audio/*',
              }}
              onChange={handleChange('singleFile')}
            />
            {values.selectSingleFile ? (
              <div>
                <p>Filename: {values.singleFile.name}</p>
                <p>Filetype: {values.singleFile.type}</p>
                <p>Size: {fileSizeFormatter(values.singleFile.size)}</p>
                <p>
                  Last modified:{' '}
                  {values.singleFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}

            <FormControl>
              <TextField
                // Single song Title
                label="Song title"
                name="title"
                value={values.singleTitle}
                inputProps={{
                  style: { color: 'white' },
                }}
                required
                autoComplete="off"
                onChange={handleChange('singleTitle')}
              />
            </FormControl>

            <br />
            <br />
            <FormControl>
              <TextField
                // Single song Artist name
                label="Artist"
                name="artist"
                value={values.singleArtist}
                inputProps={{
                  style: { color: 'white' },
                }}
                required
                onChange={handleChange('singleArtist')}
              />
            </FormControl>

            <br />
            <br />
            <CustomButton
              // Single song upload button
              name="Upload"
              col="black"
              buttonColor="green-button"
              onSubmit={handleSubmit}
            />
          </form>
        </Grid>
        <Grid item sm={6}>
          <h1> Album upload</h1>
          <form>
            <TextField
              // Multiple song files Input
              id="music-upload"
              name="file"
              type="file"
              required
              inputProps={{
                style: { color: 'white' },
                multiple: true,
              }}
              onChange={handleChange}
            />
            <br />
            <br />
            <FormControl>
              <TextField
                // Multiple song Album title
                label="Album title"
                name="title"
                inputProps={{
                  style: { color: 'white' },
                }}
                required
                fullWidth
                autoComplete="off"
                onChange={handleChange}
              />
            </FormControl>

            <br />
            <br />
            <FormControl>
              <TextField
                // Multiple songs Artist name
                label="Artist"
                name="artist"
                inputProps={{
                  style: { color: 'white' },
                }}
                required
                onChange={handleChange}
              />
            </FormControl>

            <br />
            <br />
            <CustomButton
              // Multiple songs submit button
              name="Upload"
              col="black"
              buttonColor="green-button"
              onSubmit={handleSubmit}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Upload;
