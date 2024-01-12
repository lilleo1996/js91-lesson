import { CheckCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import "./style.css";

const TodoItem = (props) => {
  const { id, task, isCompleted, handleIsComplete,isEdited,handleIsEdited  } = props;
  const hanleClick = () => {
    handleIsComplete(id);
  };

  const handleEdit = () => {
    handleIsEdited(id);
  }

  return (
      <div className={`task-item ${isEdited ? "hide_element":""}`}>
        <div className="task">
          <div className={`checkBox ${isCompleted ? "completed" : ""}`}>
            <CheckCircleFill onClick={hanleClick} />
          </div>
          <div className={`todo-task ${isCompleted ? "finish" : ""}`}>
            <span>{task}</span>
          </div>
        </div>
        <div className="edit-button">
          <ThreeDotsVertical onClick={handleEdit}/>
        </div>
      </div>
  );
};

export default TodoItem;