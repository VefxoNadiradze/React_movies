import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect, useState } from "react";
import { getShowsData } from "../Redux/ShowsData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import Paginate from "../components/Paginate";
export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(8);

  const lastPostIndex = currentPage * perPage;
  const firstPostIndex = lastPostIndex - perPage;
  const currentPosts = shows.data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <ShowsParent>
        {currentPosts.map((show) => {
          return (
            <div className="showsCart">
              <div className="imageParent">
                <Link className="LinkBtn" to={"/Movies"}>
                  <FaCirclePlay />
                </Link>
                <img src={show.image.medium} alt="" />
              </div>
            </div>
          );
        })}
      </ShowsParent>
      <Paginate
        dataLength={shows.data.length}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

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
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
