import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log("data", data);
  // console.log(genres);
  if (isFetching) return <Loader title={"Songs Loading...."} />;
  if (error) return <Error />;
  return (
    <div className=" flex flex-col">
      <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className=" font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className=" bg-black text-gray-300 p-3 text-sm rounder-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value}>{genre.title}</option>
          ))}
        </select>
      </div>
      {/* here I am going to create wrapper for song */}
      <div className=" flex flex-wrap sm:justify-start justify-center gap-6">
        {data?.tracks?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
        {/* console.log(); */}
      </div>
    </div>
  );
};

export default Discover;
