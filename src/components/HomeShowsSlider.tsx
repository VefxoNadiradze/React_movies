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

export default function HomeShowsSlider() {
  let dispatch = useDispatch<AppDispatch>();
  let ShowData = useSelector((store: RootState) => store.Shows.data);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  const popularShows = ShowData.filter(
    (show) => show.rating.average > 7 && show.language === "English"
  );

  const homeSliderShows = popularShows.slice(0, 10);

  return (
    <HomeShowsSliderComponent>
      <h3 className="title">Popular Shows</h3>
      <Swiper
        speed={1200}
        slidesPerView={4.5}
        spaceBetween={30}
        className="mySwiper"
      >
        {homeSliderShows.map((show) => {
          return (
            <SwiperSlide key={show.id}>
              <p>{show.language}</p>
              <Link className="LinkBtn" to={"/Movies"}>
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

const HomeShowsSliderComponent = styled.div`
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
