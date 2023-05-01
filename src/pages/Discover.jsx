import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

/**
 * useSelector: get data from redux store
 CAKE ={
    SLICE1: MUSIC PLAYER FUNCTIONALITY
    SLICE2: SHAZAM CORE FUNCTIONALITY
 }
 const{} = useSelector(CAKE=>CAKE.SLICE1)
 */

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';
  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between sm:flex-row flex-col mt-4 mb-10 items-center">

        <h2 className="font-bold text-3xl text-darkgreen text-left">Discover {genreTitle}</h2>

        <select name="" id="" onChange={() => {}} value="" className="bg-[#e7ffae] text-darkgreen p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}

      </div>
    </div>
  );
};

export default Discover;
