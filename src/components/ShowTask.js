import React from "react";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  function handleEdit(id) {
    const selectedTask = taskList.find((item) => item.id === id);
    setTask(selectedTask);
  }
  function handleDelete(id) {
    const newTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map(
          (
            item //used todo in video
          ) => (
            <li key={item.id}>
              <p>
                <span className="name">{item.name}</span>
                <span className="time">{item.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(item.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(item.id)}
              ></i>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
