import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const DetailsHeader = ({ data, isPlaying, activeSong, artistId, artistData, songData }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song) => {
    dispatch(setActiveSong({ song, data }));
    dispatch(playPause(true));
  };
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-lightgreen/50 sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        {songData && (
        <div className="absolute group flex flex-col sm:w-48 w-28 sm:h-48 h-28 rounded-full ">
          <div className={`absolute  sm:w-48 w-28 sm:h-48 h-28 rounded-full inset-0 justify-center items-center bg-darkgreen bg-opacity-30 group-hover:flex ${(activeSong?.title === songData?.title) && isPlaying ? 'flex bg-darkgreen bg-opacity-30' : 'hidden'}`}>
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={songData}
              handlePause={handlePauseClick}
              handlePlay={() => handlePlayClick(songData)}
            />
          </div>
        </div>
        )}
        <img
          alt="profile"
          src={
          songData?.images?.coverart
}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black/50"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-darkgreen">
            {songData?.title}
          </p>

          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-darkgreen mt-2">{songData?.subtitle}</p>
          </Link>

          <p className="text-base text-darkgreen mt-2">

            {songData?.genres?.primary}
          </p>

        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
