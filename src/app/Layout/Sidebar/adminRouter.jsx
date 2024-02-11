import {
  ROUTE_ALL_MANAGE,
  ROUTE_MY_PROFILE,
  ROUTE_SETTINGS,
  ROUTE_SOCIALS,
} from "./../../container/App/routes.jsx";

export const adminRouter = [
  {
    id: 1,
    label: "صفحه اصلی",
    link: ROUTE_ALL_MANAGE,
    user: "isadmin",
    group: "داشبورد",
  },
  {
    id: 2,
    label: "تنظیمات سایت",
    link: ROUTE_SETTINGS,
    user: "isadmin",
    group: "داشبورد",
  },
  {
    id: 3,
    label: "شبکه های اجتماعی",
    link: ROUTE_SOCIALS,
    user: "isadmin",
    group: "داشبورد",
  },
  {
    id: 4,
    label: "پروفایل",
    link: ROUTE_MY_PROFILE,
    user: "isadmin",
    group: null,
  },
];
