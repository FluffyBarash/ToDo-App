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
  styleToDoName,
}) => {
  let styleName = "name";

  if (styleToDoName === true) {
    styleName += " name_crossed_out";
  }

  return (
    <div className="todo_item">
      <label>
        <input
          checked={isChecked}
          type="checkbox"
          onClick={() => toggleCheckedToDo(idx)}
        ></input>
        <span className={styleName}>{name}</span>
      </label>
      <FaRegTrashCan className="FaRegTrashCan" onClick={() => onDeleted(id)} />
    </div>
  );
};

export default ToDoItem;
