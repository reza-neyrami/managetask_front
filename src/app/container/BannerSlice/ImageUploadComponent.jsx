import  { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import { uploadBanner } from "./bannerSlice";

const ImageUploadComponent = ({ onSelectBanner }) => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state?.banner?.uploadedImage?.banner);

  let imageSelectorRef = null;

  const handleUpload = () => {
    if (imageSelectorRef.files && imageSelectorRef.files[0]) {
      dispatch(uploadBanner(imageSelectorRef?.files[0]));
    }
  };

  useEffect(() => {
    onSelectBanner(banner);
  }, [handleUpload]);

  return (
    <div>
      <input
        accept="image/*"
        className="images-input"
        id="contained-button-file"
        multiple
        type="file"
        name="banner"
        ref={(el) => {
          imageSelectorRef = el;
        }}
        onChange={handleUpload}
      />
      <Button
        color="secondary"
        variant="outlined"
        // onClick={handelSyncImage}
      >
        Upload
      </Button>
    </div>
  );
};

export default ImageUploadComponent;
