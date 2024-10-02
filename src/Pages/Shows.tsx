import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect, useState } from "react";
import { getShowsData } from "../Redux/ShowsData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import Paginate from "../components/Paginate";
import { PropagateLoader } from "react-spinners";
import FilterData from "../components/FilterData";
export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(16);

  const lastPostIndex = currentPage * perPage;
  const firstPostIndex = lastPostIndex - perPage;
  const currentPosts = shows.filteredData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <FilterData />

      {shows.isLoading && (
        <LoadingDiv className="LoadingDiv">
          <PropagateLoader color="#ff4343" />
        </LoadingDiv>
      )}
      <ShowsParent>
        {currentPosts.length > 0 ? (
          currentPosts.map((show) => {
            return (
              <div key={show.id} className="showsCart">
                <div className="imageParent">
                  <Link className="LinkBtn" to={`/Shows/show/${show.id}`}>
                    <FaCirclePlay />
                  </Link>
                  <img src={show.image.original} alt="" />
                </div>
              </div>
            );
          })
        ) : (
          <NotFound>Show not found</NotFound>
        )}
      </ShowsParent>
      <Paginate
        dataLength={shows.filteredData.length}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

const NotFound = styled.p`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const LoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 100px gray;
  z-index: 10;
`;

const ShowsParent = styled.section`
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

    @media screen and (max-width: 1024px) {
      .LinkBtn {
        opacity: 1;
      }
      &::after {
        opacity: 1;
      }
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
