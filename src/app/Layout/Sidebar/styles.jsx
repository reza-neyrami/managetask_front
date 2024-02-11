import styled from "styled-components";

export const WrapperSidebarStyles = styled.div`
  display: block;
  width: 280px;
  background: #fff;
  box-shadow: -1px 2px 2px #eee;
  min-height: calc(100vh - 50px);
  text-align:center;
  font-family:'fateme';

  & .channelSetting {
    background: #fff;
    display: block;
    text-align: center;
    margin-bottom: 10vh;
    cursor: pointer;

    .userAvatar {
      width: 140px;
      height: 140px;
      padding: 0.5em;
      border: 3px solid #eee;
      border-radius: 100%;
    }
  }

  & .channelSetting .MuiSvgIcon-root,
  & .channelSetting .MuiListItemText-root {
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
  }

  & .channelSetting .MuiSvgIcon-root {
    font-size: 120px;
    width: 120px;
    color: #e5e5e5;
    text-align:center;
  font-family:'fateme';
  }

  & .channelSetting svg {
    background: #fff;
    box-shadow: 0 0 2px 1px #e2dfdf;
    border-radius: 100%;
    padding: 0;
    display: block;
  }

  & .channelSetting .MuiTypography-root {
    font-weight: bold;
  }
  & .MuiListItem-root {
    width: 100%;
    display: block;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    text-decoration: none;
  }
  & .MuiSvgIcon-root,
  & .MuiListItemText-root {
    color: #6f7285;
  }

  & .MuiListItemText-root {
    font-size: 1rem;
  }

  & .MuiListItemIcon-root {
    min-width: 30px;
  }

  & .MuiListItemText-root {
    text-align: right;
  }

  & .settingIcon {
    position: absolute;
    left: 32px;
    top: 22px;
    background: #e5e5e5 !important;
    border: 1px solid #e1e1e1 !important;
    cursor: pointer;
    transition: opacity 130ms ease;
  }

  & .MuiTypography-body1 {
    font-size: 15px;
    line-height: 1.8;
    letter-spacing: 0.00938em;
    border-bottom: 1px solid #ffd9035e;
    margin: auto;
    font-weight: 800;
    text-align:center;
    font-family:'fateme';
    cursor: pointer;
  }

  & .settingIcon,
  & .settingIcon svg {
    font-size: 20px !important;
    width: 20px !important;
    color: #6f7285 !important;
  }

  & .settingIcon:bold {
    opacity: 0.8;
  }

  & .logoutItem {
    position: relative;
    bottom: 0;
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }

  @media (max-height: 560px) {
    & .channelSetting {
      margin-bottom: 0vh;
    }
  }
`;
