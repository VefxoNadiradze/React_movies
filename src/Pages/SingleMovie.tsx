import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieData } from "../Redux/MovieData";
import { AppDispatch, RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function SingleMovie() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((store: RootState) => store.Movies);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  const singleMovie = movies.data.find((movie) => movie.id === Number(id));

  return (
    <div>
      <img src={singleMovie?.large_cover_image} alt="" />
    </div>
  );
}
