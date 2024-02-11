/**
 *
 * Appjsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { CssBaseline, StyledEngineProvider } from "@mui/material";
// import { ThemeProvider } from "styled-components";

import GlobalStyle from "./../../global-styles";

import Routers from "./Routers/Routers";
import { ThemeProvider } from "styled-components";

import NavigationScroll from './../../component/NavigationScroll/index';
import customTheme from './../../themes/customTheme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <NavigationScroll>
          <Routers />
        </NavigationScroll>
      </ThemeProvider>
      <CssBaseline />
      <GlobalStyle />
    </StyledEngineProvider>
  );
}

export default App;
