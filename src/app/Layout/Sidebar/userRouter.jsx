import {
  ROUTE_COMMENTS,
  ROUTE_MANAGE_LERANE,
  ROUTE_MANAGE_OORDER,
  ROUTE_MY_PROFILE,
} from "../../../containers/App/routes";

export const userRouter = [
    {
      id: 2,
      label: "پروفایل",
      link: ROUTE_MY_PROFILE,
      user: "currentUser",
      group: null,
    },
    {
      id: 10,
      label: "دوره های من",
      link: ROUTE_MANAGE_LERANE,
      user: "currentUser",
      group: "دوره ها",
    },
    {
      id: 13,
      label: "دیدگاه ها",
      link: ROUTE_COMMENTS,
      user: "currentUser",
      group: null,
    },
    {
      id: 20,
      label: "مدیریت سفارشات",
      link: ROUTE_MANAGE_OORDER,
      user: "currentUser",
      group: null,
    },
  ];