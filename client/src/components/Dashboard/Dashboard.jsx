import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomButton from '../CustomButton';

function Dashboard() {
  const [singleSongs, setSingleSongs] = useState();
  const [showSingle, setShowSingle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let reqOptions = {
        url: '/music/singleFile',
        method: 'GET',
      };
      try {
        const response = await axios.request(reqOptions);
        setSingleSongs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [showSingle]);

  const handleClick = () => {
    setShowSingle(!showSingle);
  };

  return (
    <div>
      <CustomButton
        // Single song upload button
        name="Single"
        col="black"
        buttonColor="green-button"
        onClick={handleClick}
      />
      <CustomButton
        // Single song upload button
        name="Album"
        col="black"
        buttonColor="green-button"
        onClick={handleClick}
      />
      <h1> {showSingle ? 'Single songs' : 'Albums'} </h1>
      {singleSongs &&
        showSingle &&
        singleSongs.map((song, index) => (
          <div key={index}>
            <h3>Song no. {index + 1}</h3>
            <ul>
              <li>Title: {song.songTitle}</li>
              <li>Artist: {song.artist}</li>
              <li>File name: {song.fileName}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Dashboard;
