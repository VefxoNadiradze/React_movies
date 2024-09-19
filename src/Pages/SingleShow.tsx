import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getShowsData } from "../Redux/ShowsData";

export default function SingleMovie() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, []);

  const singleShow = shows.data.find((show) => show.id === Number(id));

  return (
    <div>
      <img src={singleShow?.image.medium} alt="" />
    </div>
  );
}
