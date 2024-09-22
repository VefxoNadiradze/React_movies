import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect CSS
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; // Import the fade effect module

import avengers from "/avengers_ver21_xlg.jpg";
import batman from "/batman_ver26_xlg.jpg";
import deadpool from "/deadpool_ver11_xlg.jpg";
import interstellar from "/interstellar_ver7_xlg.jpg";

export default function Home() {
  return (
    <SliderSection>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <img src={batman} alt="Batman" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deadpool} alt="Deadpool" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={interstellar} alt="Interstellar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={avengers} alt="Avengers" />
        </SwiperSlide>
      </Swiper>
    </SliderSection>
  );
}
const SliderSection = styled.section`
  height: 75vh;
  padding: 0px 20px 0px 0px;
  margin: 0 auto;
  border-radius: 10px;

  @media screen and (max-width: 750px) {
    padding: 0;
    height: 50vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: grab;

    @media screen and (max-width: 750px) {
      object-fit: fill;
    }
  }

  .swiper-pagination {
    background-color: black;
    padding: 3px;
    border-radius: 14px;
  }

  .swiper-pagination-bullet {
    background-color: white;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background-color: white;
    opacity: 1;
  }
`;
