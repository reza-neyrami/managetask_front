
// eslint-disable-next-line no-unused-vars
import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';


import { UsersTableWrapper } from './styles';
import { USER_TYPE_ADMIN } from './../constanse/constance';

const columns = [
  { name: 'id', title: 'کد' },
  { name: 'name', title: 'نام' },
  { name: 'mobile', title: 'موبایل', dir: 'ltr' },
  { name: 'email', title: 'ایمیل' },
  { name: 'code_assigment', title: 'کد معرف' },
  {
    name: 'role',
    title: 'نوع کاربری',
    cast: v => (
      <Chip
        label={v === USER_TYPE_ADMIN ? 'مدیر' : 'کاربر'}
        color={v === USER_TYPE_ADMIN ? 'secondary' : 'default'}
      />
    ),
  },
  { name: 'email_verified_at', title: 'تاریخ تایید', dir: 'ltr', cast: v => v },
  {
    name: 'verified_at',
    title: 'وضعیت',
    cast: v =>
      v ? 'تایید شده' : <b style={{ color: '#f50057' }}>تایید نشده</b>,
  },
];

export default function UsersTable({ users, page, size, total, onChangePage, onRowClick }) {
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
              {columns.map(column => (
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
            {users?.map(user => (
              <TableRow
                role="checkbox"
                tabIndex={-1}
                key={user.id}
                onClick={() => onRowClick(user)}
              >
                {columns.map(column => {
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


UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired,
};


