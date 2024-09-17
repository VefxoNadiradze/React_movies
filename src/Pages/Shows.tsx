import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { useEffect } from "react";
import { getShowsData } from "../Redux/ShowsData";
import styled from "styled-components";

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows.data);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);
  return (
    <ShowsParent>
      {shows.map((show) => {
        return (
          <div className="showsCart">
            <div className="imageParent">
              <img src={show.image.medium} alt="" />
            </div>
          </div>
        );
      })}
    </ShowsParent>
  );
}

const ShowsParent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 30vh;
  gap: 20px;
  border-radius: 5px;

  .imageParent {
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
`;
