import { Link } from "react-router-dom";
import PlayPause from "../components/PlayPause";

const SongCard = ({ song }) => {
  const activeSong = "test";
  // const song = "test";
  return (
    <div className=" flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className=" relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song?.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }  `}
        >
          <PlayPause song={song} />
        </div>
        <img src={song?.images?.coverart} alt="song_img" />
      </div>
      {/* here  i will show song title and subtitle */}
      <div className=" flex flex-col mt-4">
        <p className=" font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.key}`}>{song.title}</Link>
        </p>
        <p className=" text-sm text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `artists/${song.artists[0].adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
