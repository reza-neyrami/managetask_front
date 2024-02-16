// eslint-disable-next-line no-unused-vars
import { Chip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

import { UsersTableWrapper } from "./styles";


import Avatar from '@mui/material/Avatar';
import moment from 'moment-jalaali';
import { BASEURL } from '../constanse/constance';

const columns = [
  { name: "id", title: "کد" },
  { name: "taskId", title: "کد وظیفه" },
  { name: "userId", title: "کد کاربر" },
  { name: "name", title: "نام" },
  { 
    name: "description", 
    title: "توضیحات",
    cast: (v) => v.split(' ').slice(0, 20).join(' ') + '...'
  },
  { 
    name: "filename", 
    title: "نام فایل",
    cast: (v) => <Avatar alt="Report Image" src={`${BASEURL}${v}`} />
  },
  { 
    name: "created_at", 
    title: "تاریخ ایجاد",
    cast: (v) => moment(v, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss')
  },
  { 
    name: "updated_at", 
    title: "تاریخ بروزرسانی",
    cast: (v) => moment(v, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss')
  },
];


export default function ReportsTable({
  users,
  page,
  size,
  total,
  onChangePage,
  onRowClick,
}) {
  function handleChangePage(e, newPage) {
    onChangePage(newPage + 1, size);
  }

  function handleChangeRowsPerPage(e) {
    onChangePage(1, parseInt(e.target.value, 10));
  }

  return (
    <UsersTableWrapper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column?.name}
                  align={column?.align}
                  style={{ minWidth: column?.minWidth }}
                >
                  {column?.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                role="checkbox"
                tabIndex={-1}
                key={user.id}
                onClick={() => onRowClick(user)}
              >
                {columns.map((column) => {
                  const value = user[column?.name];
                  return (
                    <TableCell
                      key={column?.name}
                      align={column?.align}
                      dir={column?.dir}
                    >
                      {column?.cast ? column?.cast(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={total}
        rowsPerPage={size}
        page={page - 1}
        labelRowsPerPage=""
        labelDisplayedRows={() => `صفحه ${page}`}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </UsersTableWrapper>
  );
}

ReportsTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired,
};
