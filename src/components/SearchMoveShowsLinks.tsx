import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { getMovieData } from "../Redux/MovieData";
import { Link } from "react-router-dom";
import { getShowsData } from "../Redux/ShowsData";
import { PropagateLoader } from "react-spinners";
import { getInputValue } from "../Redux/SearchData";

export default function SearchMoveShowsLinks() {
  const InputValue = useSelector((store: RootState) => store.Searching);
  // Searching Movie Data
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, [InputValue.value]);

  let filterMovieData = movies.data.filter((movie) => {
    return movie.title.toLowerCase().includes(InputValue.value.toLowerCase());
  });

  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  let filterShowsData = shows.data.filter((show) => {
    return show.name.toLowerCase().includes(InputValue.value.toLowerCase());
  });
  /////

  return (
    <SearchedLinks>
      {shows.isLoading ||
        (movies.isLoading && (
          <LoadingDiv className="L#120202iv">
            <PropagateLoader color="#ff4343" />
          </LoadingDiv>
        ))}
      {filterMovieData.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/Movies/movie/${movie.id}`}
            onClick={() => dispatch(getInputValue(""))}
          >
            <img src={movie.small_cover_image} alt="" />

            <p>{movie.title}</p>
          </Link>
        );
      })}

      {filterShowsData.map((show) => {
        return (
          <Link
            key={show.id}
            to={`/Shows/show/${show.id}`}
            onClick={() => dispatch(getInputValue(""))}
          >
            <img className="showImg" src={show.image.medium} alt="" />

            <p>{show.name}</p>
          </Link>
        );
      })}

      {filterMovieData.length < 1 &&
        (filterShowsData.length < 1 ? (
          <p className="noResultsP">No results.</p>
        ) : (
          ""
        ))}
    </SearchedLinks>
  );
}

const LoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SearchedLinks = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow: auto;
  background-color: white;
  z-index: 50;
  padding: 20px 10px;
  gap: 30px;
  box-shadow: 0px 0px 100px gray;

  @media screen and (max-width: 650px) {
    position: fixed;
    top: 25%;
    width: 90%;
    max-height: 65vh;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 14px;
    gap: 5px;

    .showImg {
      height: 67px;
    }
  }

  .noResultsP {
    text-align: center;
  }
`;
