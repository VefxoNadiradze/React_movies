import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaCirclePlay } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getShowsData } from "../Redux/ShowsData";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export default function HomeShowsSlider() {
  let dispatch = useDispatch<AppDispatch>();
  let ShowData = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  const popularShows = ShowData.data.filter(
    (show) => show.rating.average > 7 && show.language === "English"
  );

  const homeSliderShows = popularShows.slice(0, 10);

  return (
    <HomeShowsSliderComponent>
      {ShowData.isLoading && (
        <LoadingDiv className="LoadingDiv">
          <PropagateLoader color="#ff4343" />
        </LoadingDiv>
      )}
      <h3 className="title">Popular Shows</h3>
      <Swiper
        speed={1200}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 4.5,
          },
          950: {
            slidesPerView: 3.5,
          },
          680: {
            slidesPerView: 2.5,
          },
          445: {
            slidesPerView: 1.5,
          },
          360: {
            slidesPerView: 1.2,
          },

          300: {
            slidesPerView: 1,
          },
        }}
      >
        {homeSliderShows.map((show) => {
          return (
            <SwiperSlide key={show.id}>
              <p>{show.language}</p>
              <Link className="LinkBtn" to={`/Shows/show/${show.id}`}>
                <FaCirclePlay />
              </Link>

              <img src={show.image.original} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeShowsSliderComponent>
  );
}

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HomeShowsSliderComponent = styled.div`
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

  .swiper-slide img {
    border-radius: 5px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
