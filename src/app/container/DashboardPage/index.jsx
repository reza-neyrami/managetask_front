import PropTypes from "prop-types";

import styled from "styled-components";
import { Grid } from "@mui/material";
import { getAuth } from './../../utils/auth';
import Sidebar from './../../Layout/Sidebar/index.jsx';

const StyledDashboardWrapper = styled.div`
  background: #fefefe;
  color: #6f7285;
  width: auto;
  display: flex;
  margin: auto;
  position: relative;
  z-index: 1;
  overflow: auto;
  & .sidebarWrapper {
    z-index: 0;
    padding-bottom: 0px !important;
  }



  .profile-h5 {
    font-family: "fateme";
    font-size: larger;
    color: chartreuse;
  }

  & .contentWrapper {
    padding: 15px;
    flex: 1;
  }
`;


export default function DashboardPage({ showSidebar, children }) {
  const auth = getAuth();

  return (
    <StyledDashboardWrapper>
      {auth && (
        <>
          {/* <NavBar /> */}

          {showSidebar && (
            <Grid className="sidebarWrapper">
              <Sidebar />
            </Grid>
          )}
          <div className="contentWrapper">{children}</div>
        </>
      )}
    </StyledDashboardWrapper>
  );
}

DashboardPage.propTypes = {
  showSidebar: PropTypes.bool,
  dispatch: PropTypes.func,
  children: PropTypes.node,
  //   getTagsFromServer: PropTypes.func.isRequired,
  //   getCategoriesFromServer: PropTypes.func.isRequired,
};

DashboardPage.defaultProps = {
  showSidebar: true,
};