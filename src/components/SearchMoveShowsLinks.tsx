import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { getMovieData } from "../Redux/MovieData";
import { Link } from "react-router-dom";
import { getShowsData } from "../Redux/ShowsData";
import { PropagateLoader } from "react-spinners";

interface searchI {
  searchData: string;
}

export default function SearchMoveShowsLinks({ searchData }: searchI) {
  // Searching Movie Data
  const dispatchMovie = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatchMovie(getMovieData());
  }, [searchData]);

  let filterMovieData = movies.data.filter((movie) => {
    return movie.title.toLowerCase().includes(searchData.toLowerCase());
  });

  // searching Show data
  const dispatchShow = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatchShow(getShowsData());
  }, []);

  let filterShowsData = shows.data.filter((show) => {
    return show.name.toLowerCase().includes(searchData.toLowerCase());
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
          <Link to={`/Movies/movie/${movie.id}`}>
            <img src={movie.small_cover_image} alt="" />

            <p>{movie.title}</p>
          </Link>
        );
      })}

      {filterShowsData.map((show) => {
        return (
          <Link to={`/Shows/show/${show.id}`}>
            <img className="showImg" src={show.image.medium} alt="" />

            <p>{show.name}</p>
          </Link>
        );
      })}
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
  left: 40%;
  top: 100%;
  transform: translateX(-40%);
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
`;
