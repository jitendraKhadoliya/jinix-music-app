import { FaPauseCircle, FaPlayCircle } from "react-icons";

// here i will check if song is playing or not and if it is playing then I will check played song is matching with the current song title if it is then I will show pause icon there otherwise I will show play icon there

const PlayPause = ({ song, activeSong, handlePlay, handlePause, isPlaying }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle />
  ) : (
    <FaPlayCircle />
  );

export default PlayPause;
