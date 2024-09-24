import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { searchOn } from "../Redux/SearchOnOf";
import { ToggleNavigate } from "../Redux/Navigation";
import { IoClose } from "react-icons/io5";
import SearchMoveShowsLinks from "./SearchMoveShowsLinks";
import { useState } from "react";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const toggle = useSelector((store: RootState) => store.Navigate.navigate);
  const SearchToggle = useSelector(
    (store: RootState) => store.SearchOnOf.searchToggle
  );
  const [searchData, setSearchData] = useState<string>("");

  return (
    <>
      <HeaderComponent searchon={SearchToggle.toString()}>
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => {
            dispatch(ToggleNavigate(!toggle));
          }}
        />

        <Link to="/" className="Logo">
          M<RiMovie2Fill />
          vie
        </Link>

        <button
          className="OpenSearchBtn"
          onClick={() => {
            dispatch(searchOn(true));
          }}
        >
          <IoSearchSharp />
        </button>

        <div
          className="formParent"
          onClick={(event) => {
            event.target !== event.currentTarget
              ? null
              : dispatch(searchOn(false));
          }}
        >
          <button
            className="closeSearchBtn"
            onClick={() => {
              dispatch(searchOn(false));
            }}
          >
            <IoClose />
          </button>

          <form>
            <input
              value={searchData}
              type="text"
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
              placeholder="Search..."
            />
            <button>
              <IoSearchSharp />
              Search
            </button>
          </form>
        </div>

        <Link to={"/"} className="autorization">
          <span>Authorization</span>
          <FaUserCircle />
        </Link>

        {searchData && <SearchMoveShowsLinks searchData={searchData} />}
      </HeaderComponent>
    </>
  );
}

const HeaderComponent = styled.header<{ searchon: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;

  .hamburger {
    font-size: 25px;
    cursor: pointer;
    color: #ff4343;
    display: none;

    @media screen and (max-width: 750px) {
      display: block;
    }
    @media screen and (max-width: 350px) {
      font-size: 20px;
    }
  }
  /* logo styles */
  .Logo {
    display: flex;
    align-items: center;
    font-size: 35px;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #ff4343;
    font-weight: bold;

    @media screen and (max-width: 750px) {
      font-size: 25px;
    }

    @media screen and (max-width: 350px) {
      font-size: 20px;
    }
  }

  .OpenSearchBtn {
    background-color: transparent;
    border: none;
    @media screen and (max-width: 650px) {
      display: flex;
      align-items: flex-end;
    }

    svg {
      color: #ff4343;
      font-size: 30px;

      @media screen and (max-width: 350px) {
        font-size: 23px;
      }
    }

    @media screen and (max-width: 650px) {
      display: block;
    }
  }
  /* form-input styles */
  .formParent {
    position: relative;
    width: 45%;

    .closeSearchBtn {
      position: absolute;
      top: 25px;
      right: 25px;
      font-size: 38px;
      color: #ff4343;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: none;

      @media screen and (max-width: 650px) {
        display: block;
      }
    }

    @media screen and (max-width: 650px) {
      position: fixed;
      z-index: 30;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 100vh;
      width: 100%;
      background-color: #00000099;
      display: ${(props) => (props.searchon === "true" ? "block" : "none")};
    }

    form {
      position: relative;
      width: 100%;
      input {
        padding: 16px 10px;
        border-radius: 25px;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 17px;
        border: none;
        background-color: #f1f1f1;
      }

      @media screen and (max-width: 650px) {
        position: fixed;
        z-index: 30;
        width: 90%;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
      }

      button {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        height: 80%;
        border-radius: 23px;
        padding: 5px 18px;
        font-size: 15px;
        cursor: pointer;
        background-color: #ff4343;
        color: white;
        border: none;
      }
    }
  }
  /* autorization styles */

  .autorization {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    font-size: 18px;
    font-size: 17px;
    font-weight: bold;
    color: #ff4343;

    @media screen and (max-width: 750px) {
      font-size: 15px;
      gap: 10px;
    }

    svg {
      font-size: 30px;
    }

    @media screen and (max-width: 430px) {
      span {
        display: none;
      }
    }
  }
`;
