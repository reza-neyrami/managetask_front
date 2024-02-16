import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardPage from "./../../DashboardPage/index";
import { fetchFiles } from "./filesSlice";
import { BASEURL } from "./../../constanse/constance";
import styled from "styled-components";

const DiVStyles = styled.div`
  .wraper_img {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const FileList = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state?.filelist);
  const fileStatus = useSelector((state) => state.filelist?.status);
  const error = useSelector((state) => state.filelist?.error);

  useEffect(() => {
    dispatch(fetchFiles());
  }, []);

  let content;

  if (fileStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (fileStatus === "succeeded") {
    content = files.map((file) => (
      <DiVStyles key={file.id}>
        <div className="wraper_img">
          <img src={`${BASEURL}/${file.url}`} alt={file.name} />
          <p>{file.name}</p>
        </div>
      </DiVStyles>
    ));
  } else if (fileStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <DashboardPage>
      <div>{content}</div>;
    </DashboardPage>
  );
};

export default FileList;
