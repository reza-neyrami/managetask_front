
import TaskPage from "../../TaskPage/index";

import * as routes from "../routes";
// import the new component
import Layout from './../../../Layout/index';



const DashboardRoute = {
  path: "/dashboard",
  element: <Layout />,
  children: [
    {
      path: `${routes.ROUTE_CATEGORY_MANAGE}`,
      element: <TaskPage />,
    }
  ],
};

export default DashboardRoute;
