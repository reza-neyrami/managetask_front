import {
  TASKFORM_ROUTE,
  TASKASSGINED_ROUTE,
  ROUTE_MANAGE_USERS,
  TASKEDITE_ROUTE,
  ROUTE_CATEGORY_MANAGE,
} from "./../../container/App/routes";
import { ROUTE_MANAGE_REPORTS } from '../../container/App/routes';

export const usersRouter = [
  {
    id: 2,
    label: "گزارش بین دو تاریخ",
    link: ROUTE_CATEGORY_MANAGE,
    user: "currentUser",
    group: 'تسک ها',
  },
  {
    id: 3,
    label: "ایجاد تسک",
    link: TASKFORM_ROUTE,
    user: "currentUser",
    group: 'تسک ها',
  },
  {
    id: 4,
    label: "اساین تسک",
    link: TASKASSGINED_ROUTE,
    user: "currentUser",
    group: 'تسک ها',
  },
  {
    id: 5,
    label: "ویرایش تسک",
    link: TASKEDITE_ROUTE,
    user: "currentUser",
    group: 'تسک ها',
  },
  {
    id: 6,
    label: "اطلاعات کاربران",
    link: ROUTE_MANAGE_USERS,
    user: "currentUser",
    group: 'کاربران',
  },
  {
    id: 7,
    label: "اطلاعات فایل ها",
    link: ROUTE_MANAGE_REPORTS,
    user: "currentUser",
    group: 'گزارشات',
  },
];
