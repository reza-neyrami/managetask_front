/**
 *
 * Sidebar
 *
 */

import { ExpandLess, ExpandMore, LogoutOutlined } from "@mui/icons-material";
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createStructuredSelector } from "reselect";



import { WrapperSidebarStyles } from "./styles";
import { getAuth } from "./../../utils/auth";
import { adminRouter } from "./adminRouter";
import { userRouter } from "./../userRouter";

function Sidebar({ logoutData }) {
  const [openGroups, setOpenGroups] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const auth = getAuth();
  const routes = auth.role === "admin" ? adminRouter : userRouter;

  const handleClick = (link) => () => {
    history(link);
  };
  const groupedRoutes = routes.reduce(
    (acc, route) => {
      if (route.group) {
        acc[route.group] = acc[route.group] || [];
        acc[route.group].push(route);
      } else {
        acc._single.push(route);
      }

      return acc;
    },
    { _single: [] }
  );

  return (
    <WrapperSidebarStyles>
      <List component="nav">
        {groupedRoutes._single.map((route) => (
          <div key={route.id}>
            <ListItem
              component={Button}
              onClick={handleClick(route.link)}
              selected={location.pathname === route.link}
            >
              <ListItemText primary={route.label} />
            </ListItem>
          </div>
        ))}

        {Object.entries(groupedRoutes).map(([groupName, groupRoutes]) => {
          if (groupName === "_single") return null;

          const isGroupOpen = location.pathname.startsWith(groupRoutes[0].link);

          return (
            <React.Fragment key={groupName}>
              <ListItem
                component={Button}
                onClick={() =>
                  setOpenGroups({
                    ...openGroups,
                    [groupName]: !openGroups[groupName],
                  })
                }
              >
                <ListItemText primary={groupName} />
                {isGroupOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={openGroups[groupName]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {groupRoutes.map((route) => (
                    <div key={route.id}>
                      <ListItem
                        key={route.id}
                        component={Button}
                        onClick={handleClick(route.link)}
                        selected={location.pathname === route.link}
                        // className={classes.nested}
                      >
                        <ListItemText primary={route.label} />
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
      <ListItem
        component={Button}
        className="logoutItem"
        // disabled={logoutData.loading}
        // onClick={() => dispatch(logoutAction())}
      >
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="خروج ازحساب کاربری" />
      </ListItem>
    </WrapperSidebarStyles>
  );
}

Sidebar.propTypes = {
  location: PropTypes.any,
  // logoutData: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // user: makeSelectUserMe(),
  // logoutData: makeSelectLogout(),
});

const withRouter = connect(mapStateToProps);

export default withRouter(Sidebar);
