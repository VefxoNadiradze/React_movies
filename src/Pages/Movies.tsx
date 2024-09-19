import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect, useState } from "react";
import { getMovieData } from "../Redux/MovieData";
import styled from "styled-components";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Paginate from "../components/Paginate";

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(16);

  const lastPostIndex = currentPage * perPage;
  const firstPostIndex = lastPostIndex - perPage;
  const currentPosts = movies.data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <MoviesParent>
        {currentPosts.map((movie) => {
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
      </MoviesParent>

      <Paginate
        dataLength={movies.data.length}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

const MoviesParent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  gap: 20px;
  border-radius: 5px;

  .imageParent {
    position: relative;
    height: 60vh;
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

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
