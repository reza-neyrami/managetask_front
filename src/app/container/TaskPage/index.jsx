import DashboardPage from "./../DashboardPage/index.jsx";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";
import ReportTable from './ReportTable/index';
export default function TaskPage() {
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  // const dispatch = useDispatch();

  // useEffect(() => {
    // getCategorys({ page, size: pageSize });
  // }, [page, pageSize]);

  // function handlePageChange(p, s) {
  //   setPage(p);
  //   setPageSize(s);
  // }
  // function handlePageSizeChange(s) {
  //   setPageSize(s);
  // }

  return (
    <DashboardPage>
      <ReportTable />
    </DashboardPage>
  );
}
TaskPage.propTypes = {
  // getCategorys: PropTypes.func.isRequired,
  category: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
