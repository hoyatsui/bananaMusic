import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  const dispatch = useDispatch();
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, data, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col">
      {/* <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      /> */}
      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-lightgreen/50  sm:h-48 h-28" />

        <div className="absolute inset-0 flex items-center">
          <img
            alt="profile"
            src={artistData?.data[0].attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '500')}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black/50"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-darkgreen">
              {artistData?.data[0]?.attributes?.name }
            </p>

            <p className="text-base text-darkgreen mt-2">
              { artistData?.data[0]?.attributes?.genreNames[0]}
            </p>
          </div>
        </div>

        <div className="w-full sm:h-44 h-24" />
      </div>
      <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
