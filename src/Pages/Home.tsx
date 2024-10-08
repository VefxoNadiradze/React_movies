import HomeSlideShow from "../components/HomeSlideShow";
import HomeMoviesSLider from "../components/HomeMoviesSLider";
import HomeShowsSlider from "../components/HomeShowsSlider";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { PropagateLoader } from "react-spinners";
export default function Home() {
  let movieData = useSelector((store: RootState) => store.Movies);

  return (
    <>
      {movieData.isLoading && (
        <LoadingDiv className="LoadingDiv">
          <PropagateLoader color="#ff4343" />
        </LoadingDiv>
      )}
      <HomeSlideShow />
      <HomeMoviesSLider />
      <HomeShowsSlider />
    </>
  );
}

const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
`;
