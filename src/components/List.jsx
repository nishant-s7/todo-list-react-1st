import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AddTask } from "./AddTask";

export const List = () => {
  const [rows, setRows] = useState([]);
  const [taskCompletion, setTaskCompletion] = useState(false);

  const btnTaskCompleteHandler = (row) => {
    row.isStriked = true;
    setTaskCompletion(taskCompletion ? false : true);
  };

  const btnRemoveHandler = (removeId) => {
    setRows(rows.filter((row) => row.id !== removeId));
  };

  return (
    <>
      <table className="rwd-table">
        <thead>
          <tr>
            <th colSpan="2">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className={row.isStriked ? "striked taskText" : "taskText"}>
                {row.task}
              </td>
              <td>
                {row.isStriked ? (
                  <button
                    onClick={() => btnRemoveHandler(row.id)}
                    className="trash"
                  >
                    <FontAwesomeIcon icon={faTrash} color="#ffffff" />
                  </button>
                ) : (
                  <button
                    onClick={() => btnTaskCompleteHandler(row)}
                    className="check"
                  >
                    <FontAwesomeIcon icon={faCheck} color="#ffffff" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddTask rows={rows} setRows={setRows} />
    </>
  );
};
