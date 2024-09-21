import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getShowsData } from "../Redux/ShowsData";

import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export default function RecomendedShows() {
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  // Function to shuffle the Show data (without mutating the original array)
  const shuffleArray = (array: IShow[]) => {
    // Create a copy of the array before sorting
    return [...array].sort(() => Math.random() - 0.2);
  };

  // Get four random Shows
  const getFourShows = shuffleArray(shows.data).slice(0, 8);

  return (
    <>
      <Title>You might also like</Title>
      <RecomendedShowsParent>
        {shows.isLoading && (
          <LoadingDiv className="LoadingDiv">
            <PropagateLoader color="#ff4343" />
          </LoadingDiv>
        )}
        {getFourShows.map((show) => {
          return (
            <div key={show.id} className="showCart">
              <div className="imageParent">
                <Link className="LinkBtn" to={`/Shows/Show/${show.id}`}>
                  <FaCirclePlay />
                </Link>

                <img src={show.image.original} alt="" />
              </div>
            </div>
          );
        })}
      </RecomendedShowsParent>
    </>
  );
}

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h2`
  color: #ff4343;
  background-color: black;
  padding: 10px 20px;
`;

const RecomendedShowsParent = styled.div`
  position: relative;
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

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 651px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
