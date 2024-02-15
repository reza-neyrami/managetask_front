import { useEffect, useState } from "react";
import DashboardPage from "./../../DashboardPage/index";
import { Grid } from "@mui/material";
import ListPaginate from "./../UserPage/index.jsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import userColumns from "./clumn/UserClumn.jsx";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./getUserSlice";
export  function UserPage() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.usersall);
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])

  return (
    <DashboardPage>
      <div>
        <h3>salam گزارشات کاربران</h3>
        <Grid>
          <div>
          {console.log(users.entities)}
          </div>
        </Grid>
      </div>
    </DashboardPage>
  );
}

UserPage.propTypes = {
//   users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};


export default UserPage;