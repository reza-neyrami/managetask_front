import React, { useState } from "react";
import PropTypes from "prop-types";
function TaskEditor({ task, onSave, onDelete, onUploadFile, onChangeStatus }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (event) => {
    setEditedTask({
      ...editedTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileUpload = (event) => {
    onUploadFile(task.id, event.target.files[0]);
  };

  const handleStatusChange = (event) => {
    onChangeStatus(task.id, event.target.value);
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedTask.name}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleInputChange}
      />
      <select
        name="status"
        value={editedTask.status}
        onChange={handleStatusChange}
      >
        <option value="todo">برای انجام</option>
        <option value="doing">در حال انجام</option>
        <option value="done">انجام شده</option>
      </select>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSave}>ذخیره</button>
      <button onClick={handleDelete}>حذف</button>
    </div>
  );
}

TaskEditor.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    status: PropTypes.oneOf(["todo", "doing", "done"]).isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUploadFile: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TaskEditor;
