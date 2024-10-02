import styled from "styled-components";
import { FilterMoviesGenres, FilterMoviesYear } from "../Redux/MovieData";
import { FilterShows, FilterShowsYear } from "../Redux/ShowsData";
import { AppDispatch } from "../Redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function FilterData() {
  const dispatch = useDispatch<AppDispatch>();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value;

    dispatch(FilterMoviesGenres(selectedGenre));
    dispatch(FilterShows(selectedGenre));
  };

  const [toggleInputs, setToggleInputs] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    dispatch(FilterMoviesYear({ minPrice, maxPrice }));
    dispatch(FilterShowsYear({ minPrice, maxPrice }));
  }, [minPrice, maxPrice]);

  return (
    <FilterParent onClick={() => setToggleInputs(false)}>
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

      <FilterByYearParent>
        <button
          onClick={(event) => {
            event.stopPropagation();
            setToggleInputs(!toggleInputs);
          }}
        >
          Year released
        </button>

        <form
          onClick={(event) => event.stopPropagation()}
          className={toggleInputs ? "showForms" : ""}
        >
          <input
            onChange={(event) => setMinPrice(Number(event.target.value))}
            type="number"
            min={0}
          />
          <input
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            type="number"
            min={0}
          />
        </form>
      </FilterByYearParent>
    </FilterParent>
  );
}

const FilterByYearParent = styled.div`
  position: relative;
  button {
    cursor: pointer;
    padding: 5px;
    background-color: transparent;
    border-radius: 2px;
  }

  form {
    position: absolute;
    gap: 5px;
    z-index: 10;
    left: 50%;
    top: 130%;
    padding: 10px;
    background-color: #000000c1;
    display: none;
    transform: translate(-50%, -10px);

    input {
      width: 75px;
      padding: 5px;
    }
  }

  .showForms {
    display: flex;
    animation: formAnimate 0.5s ease forwards;
  }

  @keyframes formAnimate {
    from {
      opacity: 0;
      transform: translate(-50%, -10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0px);
    }
  }
`;

const FilterParent = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`;
