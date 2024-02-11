// project imports


// import * as routes from "../routes";
import RouteBarLayout from './../../../Layout/Web/index';
import LoginPage from './../LoginPage/index';
import WebPage from './../WebPage/index';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <RouteBarLayout />,
  children: [
    { path: "/home", element: <WebPage /> },
    { path: "/login", element: <LoginPage /> },
  ],
};

export default MainRoutes;
