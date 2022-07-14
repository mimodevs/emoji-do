import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { title: "homework", id: 1 },
    { title: "workout", id: 2 },
    { title: "mediteta for 5 mins", id: 3 },
    { title: "read for 30 mins", id: 4 },
    { title: "issue an invoice", id: 5 },
    { title: "homework", id: 6 },
    { title: "workout", id: 7 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>emoji-do 🍉</h1>
      </header>
      <div>
        <ul>
          {tasks.map((task) => (
            <Card
              key={task.id}
              text={task.title}
              id={task.id}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </ul>

        <NewTaskForm tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default App;
