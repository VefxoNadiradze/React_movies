import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieData } from "../Redux/MovieData";
import { AppDispatch, RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RecomendedMovies from "../components/RecomendedMovies";
import { PropagateLoader } from "react-spinners";

export default function SingleMovie() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, [id]);

  const singleMovie = movies.data.find((movie) => movie.id === Number(id));

  return (
    <>
      <SingleMovieParentComponent
        bgimage={
          singleMovie?.background_image_original || "/path/to/default-image.jpg"
        }
      >
        {movies.isLoading && (
          <LoadingDiv className="LoadingDiv">
            <PropagateLoader color="#ff4343" />
          </LoadingDiv>
        )}
        <div className="img-textParent">
          <div className="imageParent">
            <img src={singleMovie?.large_cover_image} alt="" />
          </div>

          <div className="textSide">
            <h2>{singleMovie?.title}</h2>
            <div className="genresPar">
              <h3>Genre:</h3>
              <div className="genres">
                {singleMovie?.genres.map((genre) => {
                  return <p key={genre}>{genre}</p>;
                })}
              </div>
            </div>
            <div className="description">
              <h3>story:</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              alias corporis, ab laudantium repellendus sunt natus illo nihil!
              A, velit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit, fugit! Lorem ipsum dolor sit amet.
            </div>
            <div className="durationPar">
              <h3>duration:</h3>
              <p>{singleMovie?.runtime} Min </p>
            </div>
          </div>
        </div>
      </SingleMovieParentComponent>

      <RecomendedMovies />
    </>
  );
}

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SingleMovieParentComponent = styled.div<{ bgimage: string }>`
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.bgimage});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media screen and (max-width: 1135px) {
    padding: 10px;
  }

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
  } */
  .img-textParent {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 871px) {
      flex-direction: column;
      margin-top: 0;
      gap: 10px;
    }
    .imageParent {
      height: 60vh;

      @media screen and (max-width: 1135px) {
        width: 30%;
      }
      @media screen and (max-width: 871px) {
        width: 70%;
        height: 45vh;
        margin: 0 auto;
      }
      @media screen and (max-width: 365px) {
        width: 100%;
      }

      border-radius: 10px;
      img {
        height: 100%;
        border-radius: 10px;
        @media screen and (max-width: 1135px) {
          width: 100%;
        }
        @media screen and (max-width: 871px) {
          display: block;
          margin: 0 auto;
          width: 70%;
        }
        @media screen and (max-width: 490px) {
          width: 100%;
        }
      }
    }

    .textSide {
      padding-left: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 50%;
      background-color: #0000008f;
      box-shadow: 0px 0px 50px gray;
      border-radius: 5px;
      margin-left: 10px;
      @media screen and (max-width: 1135px) {
        width: 70%;
      }
      @media screen and (max-width: 871px) {
        margin-left: 0;
        width: 100%;
        max-height: 50vh;
        overflow: auto;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
        color: #ff4343;
        @media screen and (max-width: 1135px) {
          font-size: 25px;
        }
      }

      .genresPar {
        h3 {
          margin-bottom: 10px;
          color: #ff4343;
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        .genres {
          display: flex;
          gap: 10px;
          @media screen and (max-width: 430px) {
            flex-wrap: wrap;
          }

          p {
            border: 2px solid #ff4343;
            padding: 5px;
            border-radius: 10px;
            font-weight: bold;
            color: #ff4343;
          }
        }
        margin-bottom: 20px;
      }

      .description {
        h3 {
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 30px;
        color: #ff4343;
        @media screen and (max-width: 1135px) {
          line-height: 25px;
          font-size: 14px;
        }
      }
      .durationPar {
        h3 {
          margin-bottom: 10px;
          color: #ff4343;
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        p {
          color: #ff4343;
        }
      }
    }
  }
`;
