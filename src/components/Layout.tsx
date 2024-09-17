import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div>
      <Header />
      <ContentParentSidebar>
        <SideBar />

        <ContentParent>
          <Outlet />
        </ContentParent>
      </ContentParentSidebar>
    </div>
  );
}
const ContentParentSidebar = styled.section`
  display: flex;
`;

const ContentParent = styled.div`
  flex-grow: 1;
  padding: 20px;
  width: calc(100% - 90px);
`;
