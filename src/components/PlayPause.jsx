import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && (activeSong?.title === song.title) && (activeSong?.subtitle === song.subtitle) ? (
  <FaPauseCircle size={35} className="text-yellow" onClick={handlePause} />
) : <FaPlayCircle size={35} className="text-yellow" onClick={handlePlay} />
);

export default PlayPause;
