import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/footer";
import { useState } from "react";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5th at 1:30pm",
      reminder: true
    },

    {
      id: 2,
      text: "Groceries",
      day: "Feb 6th at 10:30am",
      reminder: true
    },

    {
      id: 3,
      text: "Learn hooks in react",
      day: "Feb 7th at 6:00am",
      reminder: false
    },

    {
      id: 4,
      text: "Food shopping",
      day: "Feb 8th at 11:00am",
      reminder: false
    }
  ]);

  //delete task function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //function for reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //function for adding tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show. Please add a task."
      )}
      <Footer />
    </div>
  );
}
