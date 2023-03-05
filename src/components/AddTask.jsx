import React, { useState, useRef, useEffect } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddTask = ({ rows, setRows }) => {
  const [input, setInput] = useState(false);
  const [task, setTask] = useState("");

  const focusInput = useRef(null);

  useEffect(() => {
    if (input) {
      focusInput.current.focus();
    }
  }, [input]);

  const addBtnHandler = () => {
    setInput(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (task != "") {
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          task: task,
          isStriked: false,
        },
      ]);
      setInput(false);
      setTask("");
    }
  };

  return (
    <div className="addTask">
      {input ? (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            ref={focusInput}
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faAdd} color="#ffffff" />
          </button>
        </form>
      ) : (
        <button onClick={addBtnHandler}>
          <FontAwesomeIcon icon={faAdd} color="#ffffff" />
        </button>
      )}
    </div>
  );
};
