import TaskPage from "../../TaskPage/index";

import * as routes from "../routes";
// import the new component
import Layout from "./../../../Layout/index";
import TaskForm from "./../../TaskPage/CreateTask/index";
import Assgined from './../../TaskPage/Assgined/index';
import TaskEditor from './../../TaskPage/TaskEditor/TaskEditor';

import { ManageUsersPage } from './../../ManageUsersPage/index';
import { ManageReportsPage } from '../../ManageReportsPage';
import { ManageTasksPage } from './../../TaskPage/ManageTasksPage/index';
import FileList from './../../ManageReportsPage/Files/FileListe';

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
    {
      path: `${routes.ROUTE_MANAGE_USERS}`,
      element: <ManageUsersPage />,
    },
    {
      path: `${routes.ROUTE_MANAGE_REPORTS}`,
      element: <ManageReportsPage />,
    },
    {
      path: `${routes.ROUTE_MANAGE_TASKS}`,
      element: <ManageTasksPage />,
    },
    {
      path: `${routes.ROUTE_MANAGE_FILES}`,
      element: <FileList />,
    },
  ],
};

export default DashboardRoute;
