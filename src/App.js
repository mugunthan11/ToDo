import logo from "./logo.svg";
import "./App.css";
import Temp from "./components/Temp";
import { useState } from "react";
import { findByLabelText } from "@testing-library/dom";

function App() {
  const [task, setTask] = useState(["write a task", "Do a task"]);
  const [str, setStr] = useState("");

  function addTask() {
    if (str.length > 0) {
      setTask(function (arr) {
        const tempArr = [...arr];
        tempArr.push(str);
        return tempArr;
      });
    }

    setStr("");
  }

  function addName(event) {
    setStr(event.target.value);
  }

  function deleteAll() {
    setTask([]);
  }

  function deleteSpecific(index) {
    setTask(function (arr) {
      const tempArr = [...arr];
      tempArr.splice(index,"1");
      return tempArr;
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:'url("https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png")',
        backgroundPosition: "center",
        height: "100vh",
        fontWeight:"bold",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <div>
            {task.map(function (t, index) {
              return <Temp task={t} index={index} deleteing={deleteSpecific} />;
            })}
          </div>
          <div>
            <button onClick={deleteAll}>Delete All task!!</button>
            <input
              type="text"
              value={str}
              onChange={addName}
              style={{ marginRight: 10, marginLeft: 10 }}
            ></input>
            <button onClick={addTask}>Add Task</button>
          </div> 
          <div style={{position: 'relative',width: 100, height: 100, backgroundColor: 'red'}}>
            <p style={{position: 'absolute', bottom: 0}}>Hii</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
