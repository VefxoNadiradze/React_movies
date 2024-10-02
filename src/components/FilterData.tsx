import styled from "styled-components";
import { FilterMovies } from "../Redux/MovieData";
import { FilterShows } from "../Redux/ShowsData";
import { AppDispatch } from "../Redux/store";
import { useDispatch } from "react-redux";

export default function FilterData() {
  const dispatch = useDispatch<AppDispatch>();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value;

    dispatch(FilterMovies(selectedGenre));
    dispatch(FilterShows(selectedGenre));
  };

  return (
    <FilterParent>
      <select onChange={handleFilterChange} className="genres" id="age">
        <option value="All genres">All genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Musical">Musical</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Science Fiction (Sci-Fi)">
          Science Fiction (Sci-Fi)
        </option>
        <option value="Sport">Sport</option>
        <option value="Thriller">Thriller</option>
        <option value="War">War</option>
        <option value="Western">Western</option>
      </select>
    </FilterParent>
  );
}

const FilterParent = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`;
