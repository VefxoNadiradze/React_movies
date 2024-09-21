import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getMovieData } from "../Redux/MovieData";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function RecomendedMovies() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  // Function to shuffle the movie data (without mutating the original array)
  const shuffleArray = (array: IMovie[]) => {
    // Create a copy of the array before sorting
    return [...array].sort(() => Math.random() - 0.2);
  };

  // Get four random movies
  const getFourMovies = shuffleArray(movies.data).slice(0, 8);

  //   console.log(movies.data);
  return (
    <>
      <Title>You might also like</Title>
      <RecomendedMoviesParent>
        {getFourMovies.map((movie) => {
          return (
            <div key={movie.id} className="movieCart">
              <div className="imageParent">
                <Link className="LinkBtn" to={`/Movies/movie/${movie.id}`}>
                  <FaCirclePlay />
                </Link>

                <img src={movie.large_cover_image} alt="" />
              </div>
            </div>
          );
        })}
      </RecomendedMoviesParent>
    </>
  );
}

const Title = styled.h2`
  color: #ff4343;
  background-color: black;
  padding: 10px 20px;
`;

const RecomendedMoviesParent = styled.div`
  background-color: black;
  padding: 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 20px;
  margin: 0 auto;
  .imageParent {
    position: relative;
    height: 40vh;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }

    .LinkBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 60px;
      color: #ff4343;
      cursor: pointer;
      opacity: 0;
      transition: 0.5s ease;
      z-index: 10;
    }
    &:hover .LinkBtn {
      opacity: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #00000080;
      z-index: 5;
      opacity: 0;
      border-radius: 5px;
      transition: 0.5s ease;
    }
    &:hover:after {
      opacity: 1;
    }
  }
`;
