// here i will write player functionality

import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

// in initialState i have current song detail and current index song is active or not song is playing or not playing and also have genre list
const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.activeSong = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload?.data;
      }
      //   here i am putting current index equal to the song index value
      state.currentIndex = action.payload.i;
      //   and making song bar active
      state.isActive = true;
    },

    // ! here i will write code for next song
    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.tracks) {
        state.activeSong = state.currentSongs[action.payload]?.tracks;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    // ! here i will write code for previous song
    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },
  },
});

export const { setActiveSong, nextSong, prevSong } = playerSlice.actions;

export default playerSlice.reducer;
