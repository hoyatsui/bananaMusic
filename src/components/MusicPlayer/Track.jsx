import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="truncate flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4 truncate`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <Link to={`/songs/${activeSong.key}`}>
        <p className="truncate text-darkgreen font-bold text-lg">
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </p>
      </Link>
      <Link to={`/artists/${activeSong?.artists[0]?.adamid}`}>
        <p className="truncate text-darkgreen">
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </Link>
    </div>
  </div>
);

export default Track;
