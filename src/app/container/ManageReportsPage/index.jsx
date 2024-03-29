// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import ReportsTable from "./ReportsTable";
import DashboardPage from "./../DashboardPage/index";

import { useEffect, useState, useCallback } from "react";
import { fetchAllReports } from "./getSlice";

export function ManageReportsPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.allReports?.entities);

  const getReportFromServer = useCallback(() => {
    dispatch(fetchAllReports({ page, size: pageSize }));
  }, [page, pageSize, dispatch]);

  useEffect(() => {
    getReportFromServer();
  }, [getReportFromServer]);

  function handlePageChange(p, s) {
    setPage(p);
    setPageSize(s);
  }

  return (
    <DashboardPage>
      <title>مدیریت گزارشات</title>
      <meta name="description" content="مدیریت گزارشتات" />
      <ReportsTable
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

ManageReportsPage.propTypes = {};

export default ManageReportsPage;
