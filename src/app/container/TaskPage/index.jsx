import DashboardPage from "./../DashboardPage/index.jsx";
import { Grid } from "@mui/material";
import ListPaginate from "./../../component/ListPaginate/index.jsx";
import { columns } from "./Cell.jsx";
export default function TaskPage({ category }) {
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
  dispatch: PropTypes.func.isRequired,
  getCategorys: PropTypes.func.isRequired,
  category: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};