import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getMovieData } from "../Redux/MovieData";
import styled from "styled-components";

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies.data);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);
  return (
    <MoviesParent>
      {movies.map((movie) => {
        return (
          <div className="movieCart">
            <div className="imageParent">
              <img src={movie.large_cover_image} alt="" />
            </div>
          </div>
        );
      })}
    </MoviesParent>
  );
}

const MoviesParent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30vh;
  gap: 20px;
  border-radius: 5px;

  .imageParent {
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
`;
