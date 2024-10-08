import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getMovieData } from "../Redux/MovieData";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export default function HomeMoviesSLider() {
  let dispatch = useDispatch<AppDispatch>();
  let movieData = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  let popularMovies = movieData.data.filter(
    (movie) => movie.rating > 6.5 && movie.language === "en"
  );

  let homeSLiderMovies = popularMovies.slice(0, 10);

  return (
    <HomeMovieSliderComponent>
      {movieData.isLoading && (
        <LoadingDiv className="LoadingDiv">
          <PropagateLoader color="#ff4343" />
        </LoadingDiv>
      )}
      <h3 className="title">Popular Movies</h3>
      <Swiper
        speed={1200}
        slidesPerView={4.5}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 4.5,
          },
          880: {
            slidesPerView: 3.5,
          },
          445: {
            slidesPerView: 1.5,
          },

          200: {
            slidesPerView: 1.2,
          },
        }}
      >
        {homeSLiderMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <p className="movieLanguage">{movie.language}</p>
              <p className="movieYear">{movie.year}</p>
              <Link className="LinkBtn" to={`/Movies/movie/${movie.id}`}>
                <FaCirclePlay />
              </Link>

              <img src={movie.large_cover_image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeMovieSliderComponent>
  );
}

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeMovieSliderComponent = styled.div`
  position: relative;
  margin-top: 100px;

  .title {
    margin-bottom: 20px;
  }
  .swiper {
    width: 100%;
    height: 50vh;
  }

  .swiper-slide {
    height: 100%;
    position: relative;
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 5px;
      background-color: #ff4343;
      color: white;
      font-size: 17px;
      padding: 2px 10px;
      width: max-content;
    }
    .movieYear {
      left: 10px;
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

    @media screen and (max-width: 1024px) {
      .LinkBtn {
        opacity: 1;
      }
      &::after {
        opacity: 1;
      }
    }
  }

  .swiper-slide img {
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
