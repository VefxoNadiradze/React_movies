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

export default function HomeMoviesSLider() {
  let dispatch = useDispatch<AppDispatch>();
  let movieData = useSelector((store: RootState) => store.Movies.data);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  let popularMovies = movieData.filter(
    (movie) => movie.rating > 7 && movie.language === "en"
  );

  let homeSLiderMovies = popularMovies.slice(0, 10);

  return (
    <HomeMovieSliderComponent>
      <h3 className="title">Popular Movies</h3>
      <Swiper
        speed={1200}
        slidesPerView={4.5}
        spaceBetween={30}
        className="mySwiper"
      >
        {homeSLiderMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <p className="movieLanguage">{movie.language}</p>
              <p className="movieYear">{movie.year}</p>
              <Link className="LinkBtn" to={"/Movies"}>
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

const HomeMovieSliderComponent = styled.div`
  margin-top: 100px;
  height: 50vh;

  .title {
    margin-bottom: 20px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
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
      height: 100vh;
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

  .swiper-slide img {
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
