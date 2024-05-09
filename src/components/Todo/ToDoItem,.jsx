import React from "react";
import "./style/TodDo.css";
import { FaRegTrashCan } from "react-icons/fa6";

const ToDoItem = ({
  idx,
  name,
  isChecked,
  toggleCheckedToDo,
  onDeleted,
  id,
}) => {
  return (
    <div className="todo_item">
      <label>
        <input
          checked={isChecked}
          type="checkbox"
          onClick={() => toggleCheckedToDo(idx)}
        ></input>
        <span className="name">{name}</span>
      </label>
      <FaRegTrashCan className="FaRegTrashCan" onClick={() => onDeleted(id)} />
    </div>
  );
};

export default ToDoItem;
