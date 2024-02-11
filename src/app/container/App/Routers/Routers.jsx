import { useRoutes } from "react-router";
import DashboardRoute from "./DashbordRoute";
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, DashboardRoute]);
}
