import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

/**
 * CAKE->SELECTORS(PIECES)
 * DISPATCH( ADD CHOCLATE, ADD STRAWBERRY, ADD VANILLA)
 */

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  // setActiveSong({ song, data, i }) means: dispatch({ type: 'player/setActiveSong', payload: { song, data, i } })
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/20 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-darkgreen bg-opacity-30 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-darkgreen bg-opacity-30' : 'hidden'}`}>
          <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
        </div>

        <img src={song.images?.coverart} alt={song.title} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-darkgreen truncate
        "
        >
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-darkgreen mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
