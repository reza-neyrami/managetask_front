

const userColumns = [
    { name: "ID", field: "id", title: "شماره", align: "left", editable: false },
    { name: "Username", field: "username", title: "نام کاربری", editable: true },
    { name: "Email", field: "email", title: "ایمیل", editable: true },
    { name: "Role", field: "role", title: "نقش", editable: true },
    { name: "Created At", field: "created_at", title: "تاریخ ایجاد", editable: false },
    { name: "Updated At", field: "updated_at", title: "تاریخ بروزرسانی", editable: false },
];

export default userColumns;
