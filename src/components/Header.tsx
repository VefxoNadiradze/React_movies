import styled from "styled-components";

import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <HeaderComponent>
      <Link to="/" className="Logo">
        M<RiMovie2Fill />
        vie
      </Link>

      <form>
        <input type="text" placeholder="Search..." />
        <button>
          <IoIosSearch />
          Search
        </button>
      </form>

      <Link to={"/"} className="autorization">
        Authorization
        <FaUserCircle />
      </Link>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  /* logo styles */
  .Logo {
    display: flex;
    align-items: center;
    font-size: 35px;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #ff4343;
    font-weight: bold;
  }

  /* form-input styles */
  form {
    position: relative;
    width: 45%;
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

    svg {
      font-size: 30px;
    }
  }
`;
