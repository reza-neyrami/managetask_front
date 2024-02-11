import { Avatar } from "@mui/material";

const columns = [
    { name: "ID", field: "id", title: "Number", align: "left", editable: false },
    { name: "Title", field: "title", title: "نام", editable: true },
    {
      name: "Banner",
      field: "banner",
      editable: true,
      title: "تصویر",
      type:"image",
      cast: (v) => (
        <Avatar src={v} variant="rounded" className="avatar-product" />
      ),
    },
  ];

  export default columns;