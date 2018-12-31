import React from 'react';
import { Link } from 'react-router-dom';
import peopleData from '../data/people';

const HomePage = () => (
  <div>
    {Object.keys(peopleData).map((person) => (
      <Link to={`/playlists/${person}`}>
        {person}
      </Link>
    ))}
  </div>
)

export default HomePage;
