import DashboardPage from "./../DashboardPage/index.jsx";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import ListPaginate from "./../../component/ListPaginate/index.jsx";
import { columns } from "./Cell.jsx";
import { useEffect } from 'react';
export default function TaskPage({ category }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const dispatch = useDispatch();


  useEffect(() => {
    // getCategorys({ page, size: pageSize });
  }, [page, pageSize]);

  function handlePageChange(p, s) {
    setPage(p);
    setPageSize(s);
  }
  function handlePageSizeChange(s) {
    setPageSize(s);
  }

  return (
    <DashboardPage>
      <div>
        <Grid>
          <div>
            {category?.data && (
              <ListPaginate
                columns={columns}
                data={category?.data}
                page={page}
                size={pageSize}
                totals={category?.total}
                onChangePage={handlePageChange}
                onChangePageSize={handlePageSizeChange}
                handleClikedProduct={setSelectedProduct}
                handleDeletedProduct={handleDeleteData}
                // handleUpdateData={handleUpdateDataCourse}
              />
            )}
          </div>
        </Grid>
      </div>
    </DashboardPage>
  );
}
TaskPage.propTypes = {
  getCategorys: PropTypes.func.isRequired,
  category: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
