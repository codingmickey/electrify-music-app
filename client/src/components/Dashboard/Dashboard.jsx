import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomButton from '../CustomButton';

function Dashboard() {
  const [singleSongs, setSingleSongs] = useState();
  const [showSingle, setShowSingle] = useState(true);

  const [albums, setAlbums] = useState();
  const [showAlbums, setShowAlbums] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let reqOptionsSingle = {
        url: '/music/singleFile',
        method: 'GET',
      };
      let reqOptionsMultiple = {
        url: '/music/multipleFiles',
        method: 'GET',
      };
      let reqOptions = {
        url: '/verify',
        method: 'GET',
      };
      axios.request(reqOptions).then(function (response) {
        console.log(response.data.msg);
        if (response.data.msg === 'Access Granted') {
        }
      });
      try {
        const responseSingle = await axios.request(reqOptionsSingle);
        setSingleSongs(responseSingle.data);

        const responseMultiple = await axios.request(reqOptionsMultiple);
        setAlbums(responseMultiple.data);
        console.log(responseMultiple.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (type) => {
    if (type === 'single') {
      if (!showSingle) {
        setShowSingle(true);
        setShowAlbums(false);
      }
    }
    if (type === 'album') {
      if (!showAlbums) {
        setShowAlbums(true);
        setShowSingle(false);
      }
    }
  };

  return (
    <div>
      <CustomButton
        // Single song upload button
        name="Single"
        col="black"
        buttonColor="green-button"
        thing="single"
        onClick={handleClick}
      />
      <CustomButton
        // Single song upload button
        name="Album"
        col="black"
        buttonColor="green-button"
        thing="album"
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
      {albums &&
        showAlbums &&
        albums.map((album, index) => (
          <div key={index}>
            <h2>Album no. {index + 1}</h2>

            <h4>Album Title: {album.albumTitle}</h4>
            <h4>Album Artist: {album.artist}</h4>

            {album.songs.map((song, index) => (
              <div key={index}>
                <ul>
                  <p>Song no. {index + 1}</p>
                  <li>File name: {song.fileName}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Dashboard;
