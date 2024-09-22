import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidMovie } from "react-icons/bi";
import { useSelector } from "react-redux";

import { RootState } from "../Redux/store";

export default function SideBar() {
  const toggle = useSelector((store: RootState) => store.Navigate.navigate);

  return (
    <SidebarComponent toggle={toggle.toString()}>
      <ul>
        <li>
          <Link to={"/"}>
            <IoMdHome />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/movies"}>
            <RiMovie2Fill />
            Movies
          </Link>
        </li>
        <li>
          <Link to={"/Shows"}>
            <BiSolidMovie />
            Shows
          </Link>
        </li>
      </ul>
    </SidebarComponent>
  );
}

const SidebarComponent = styled.div<{ toggle: string }>`
  position: relative;
  min-height: 100vh;
  padding: 13px;
  width: 90px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 20;
    background-color: white;
    min-height: max-content;
    width: 100%;
    bottom: ${(props) => (props.toggle === "true" ? "0%" : "-100%")};
    box-shadow: 0px 0px 100px gray;
  }

  ul {
    position: sticky;
    top: 35%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;

    @media screen and (max-width: 750px) {
      width: 100%;
      position: static;
      top: 0;
      flex-direction: row;
      justify-content: center;
    }

    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-size: 17px;
        font-weight: bold;
        color: #ff4343;

        svg {
          font-size: 28px;
        }
      }
    }
  }
`;
