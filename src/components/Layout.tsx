import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <>
      <Header />
      <ContentParentSidebar>
        <SideBar />

        <ContentParent>
          <Outlet />
        </ContentParent>
      </ContentParentSidebar>
    </>
  );
}

const ContentParentSidebar = styled.section`
  min-height: 100vh;
  display: flex;
`;

const ContentParent = styled.div`
  padding: 20px;
  width: calc(100% - 90px);

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 10px;
  }
`;
