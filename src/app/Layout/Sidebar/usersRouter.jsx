import {
  ROUTE_MY_PROFILE_BANNER,
  TASKFORM_ROUTE,
  TASKASSGINED_ROUTE,
  ROUTE_MANAGE_USERS,
  TASKEDITE_ROUTE,
} from "./../../container/App/routes";

export const usersRouter = [
  {
    id: 2,
    label: "پروفایل",
    link: ROUTE_MY_PROFILE_BANNER,
    user: "currentUser",
    group: null,
  },
  {
    id: 3,
    label: "ایجاد تسک",
    link: TASKFORM_ROUTE,
    user: "currentUser",
    group: null,
  },
  {
    id: 4,
    label: "اساین تسک",
    link: TASKASSGINED_ROUTE,
    user: "currentUser",
    group: null,
  },
  {
    id: 5,
    label: "ویرایش تسک",
    link: TASKEDITE_ROUTE,
    user: "currentUser",
    group: null,
  },
  {
    id: 6,
    label: "کاربران",
    link: ROUTE_MANAGE_USERS,
    user: "currentUser",
    group: null,
  },
];
