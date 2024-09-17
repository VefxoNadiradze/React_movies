import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidMovie } from "react-icons/bi";

export default function SideBar() {
  return (
    <SidebarComponent>
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

const SidebarComponent = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 13px;
  width: 90px;
  ul {
    position: sticky;
    top: 35%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;

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
