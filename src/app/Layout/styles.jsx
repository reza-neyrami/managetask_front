import { AppBar, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const drawerWidth = 240;

export const StyledWrapper = styled.div`
 font-family:fateme;
  width: 100%;
`;

export const StyledAppBar = styled(AppBar)`
  z-index: ${({ theme }) => theme?.zIndex?.drawer + 1};
  background-color: rgb(255, 255, 255);
  position: inherit;
  margin-bottom: 15px;
  color: aqua;
  font-family:fateme;
`;

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
font-family:fateme;
  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;

export const StyledMenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme?.spacing(2)}px;
  margin: 10px;
  font-family:fateme;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    display: none;
  }
`;

export const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

export const SidebarWrapper = styled(Box)`
  background-color: #fff;
  height: 100vh;
  width: 240px;
  font-family:fateme;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  font-weight: bold;
  background-color: #2196f3;
  color: #fff;
  font-family:fateme;
`;

export const SidebarDivider = styled(Divider)`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const CollapseListStyles = styled.div`
  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background-color: #f1f1f1;
  }

  .MuiListItemIcon-root {
    color: #2196f3;
  }

  .MuiListItemText-root {
    color: #333;
    cursor: pointer;
  }
`;
