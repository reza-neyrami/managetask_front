import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import  { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import CollapseList from "./CollapseList";

import { userRouter } from './userRouter';
import {
  LogoWrapper,
  SidebarDivider,
  SidebarWrapper,
  StyledAppBar,
  StyledDrawer,
  StyledMenuButton,
  StyledWrapper,
} from "./styles";

function Layout({nowrap}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAccountClick = () => {
    setOpenAccount(!openAccount);
  };

  const drawer = (
    <div>
      <SidebarWrapper>
        <LogoWrapper>
          <Typography variant="h6">Heaven Art</Typography>
        </LogoWrapper>
        <SidebarDivider />
        <CollapseList items={userRouter} />
        <SidebarDivider />
        <Box textAlign="center" marginTop="auto">
          <ChevronLeft onClick={handleAccountClick} />
        </Box>
      </SidebarWrapper>
    </div>
  );

  return (
    <StyledWrapper>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledMenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledMenuButton>
          <Link to="/" component={Typography} variant="h6" >
            Home
          </Link>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </StyledDrawer>
        <Outlet />
    </StyledWrapper>
  );
}

export default Layout;
