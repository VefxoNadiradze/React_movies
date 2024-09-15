import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div>
      <Header />
      <ContentParent>
        <SideBar />
        <Outlet />
      </ContentParent>
    </div>
  );
}
const ContentParent = styled.section`
  display: flex;
`;
