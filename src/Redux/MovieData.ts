import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  is_repack: string;
  video_codec: string;
  bit_depth: string;
  audio_channels: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: Torrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export const getMovieData = createAsyncThunk("getMovieData", async () => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?limit=50"
  );
  const data = await response.json();

  return data.data.movies;
});

interface MovieDataI {
  isLoading: boolean;
  data: Movie[];
  error: boolean;
  filteredData: Movie[];
}

const initialState: MovieDataI = {
  isLoading: false,
  data: [],
  error: false,
  filteredData: [],
};

const MovieData = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getMovieData.rejected, (state) => {
      state.error = true;
    });
  },
});

export default MovieData.reducer;
