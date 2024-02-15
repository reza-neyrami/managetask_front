import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import UserModal from "./UserModal";
import UsersTable from "./UsersTable";
import DashboardPage from "./../DashboardPage/index";
import { makeSelectUsers } from "./../App/selectors";
import { getUsersAction } from "./../App/actions.jsx";

import { useEffect, useState, useCallback } from "react";
import { UserForm } from "./UserForm";

export function ManageUsersPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsers());
  const emptyList = !users?.data;

  const getUsersFromServer = useCallback(() => {
    dispatch(getUsersAction({ page, size: pageSize }));
  }, [page, pageSize]);

  useEffect(() => {
    getUsersFromServer();
  }, [getUsersFromServer]);

  function handlePageChange(p, s) {
    setPage(p);
    setPageSize(s);
  }
 
  return (
    <DashboardPage>
      <title>مدیریت کاربران</title>
      <meta name="description" content="مدیریت کاربران" />
      <UsersTable
        users={users?.data}
        page={page}
        size={pageSize}
        total={users?.pagination?.total || 10}
        onChangePage={handlePageChange}
        onRowClick={setSelectedUser}
      />

      {selectedUser && (
        <div>
          <UserForm user={selectedUser} />
        </div>
      )}

      {/* {users?.params && <LoadingWithText text="در حال دریافت لیست کاربران" />} */}
    </DashboardPage>
  );
}

ManageUsersPage.propTypes = {};

export default ManageUsersPage;
