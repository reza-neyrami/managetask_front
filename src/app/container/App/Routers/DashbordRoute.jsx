import TaskPage from "../../TaskPage/index";

import * as routes from "../routes";
// import the new component
import Layout from "./../../../Layout/index";
import TaskForm from "./../../TaskPage/CreateTask/index";
import Assgined from './../../TaskPage/Assgined/index';
import TaskEditor from './../../TaskPage/TaskEditor/TaskEditor';

const DashboardRoute = {
  path: "/dashboard",
  element: <Layout />,
  children: [
    {
      path: `${routes.ROUTE_CATEGORY_MANAGE}`,
      element: <TaskPage />,
    },
    {
      path: `${routes.TASKFORM_ROUTE}`,
      element: <TaskForm />,
    },
    {
      path: `${routes.TASKASSGINED_ROUTE}`,
      element: <Assgined />,
    },
    {
      path: `${routes.TASKEDITE_ROUTE}`,
      element: <TaskEditor />,
    },
  ],
};

export default DashboardRoute;
