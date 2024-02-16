// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";




import { useEffect, useState, useCallback } from "react";
import { fetchAllTasksReports } from "./getSlice";
import TasksTable from './TasksTable';
import DashboardPage from './../../DashboardPage/index';

export function ManageTasksPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.alltasks?.entities);
  

  const getTasksFromServer = useCallback(() => {
    dispatch(fetchAllTasksReports({ page, size: pageSize }));
  }, [page, pageSize, dispatch]);

  useEffect(() => {
    getTasksFromServer();
  }, []);

  function handlePageChange(p, s) {
    setPage(p);
    setPageSize(s);
  }

  return (
    <DashboardPage>
      <title>مدیریت کاربران</title>
      <meta name="description" content="مدیریت کاربران" />
      <TasksTable
        users={users?.data}
        page={page}
        size={pageSize}
        total={users?.pagination?.total || 10}
        onChangePage={handlePageChange}

      />

      {/* {users?.params && <LoadingWithText text="در حال دریافت لیست کاربران" />} */}
    </DashboardPage>
  );
}

ManageTasksPage.propTypes = {};

export default ManageTasksPage;
