import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFound(props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="notFound">
      <h1>404 Error</h1>
      <p> {location.pathname} not found! 🥲</p>
      <h3>
        Try listening to some 🎵 go to <Link to="/">homepage</Link>
      </h3>
    </div>
  );
}

export default NotFound;
