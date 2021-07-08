import React from "react";
import "./App.css";
import SubmitForm from "./Components/SubmitForm";
import TasksList from "./Components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css'
var todos = [];
var tasks1 = JSON.parse(localStorage.getItem("todos"));

if (tasks1 == null) {
  tasks1 = [];
} else {
  tasks1 = JSON.parse(localStorage.getItem("todos"));
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: tasks1 };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addTask(task) {
    this.setState((prevState) => {
      return {
        //tasks:this.state.tasks

        tasks: prevState.tasks.concat(task),
      };
    });

    //first code without local storage
    /* this.setState((prevState) => {
      return { 
        tasks: prevState.tasks.concat(task) 
      };
    });
   */
  }
  

  onChange = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          // suppose to update
          return {
            ...task,
            done: !task.done,
          };
        } else {
          return task;
        }
      }),
    }));
    this.SetLocalStorage();

  };

  SetLocalStorage(){
    const todos= this.state.tasks;
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  removeTask(id) {
    let a = JSON.parse(localStorage.getItem("todos"));
    if (a == null) {
      todos = [];
    } else {
      todos = a;
    }
    todos = todos.filter((x) => x.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));

    const tasks = this.state.tasks.filter((element) => element.id !== id);
    this.setState({ tasks: tasks });
  }

  render() {
    const todos= this.state.tasks;
    localStorage.setItem("todos", JSON.stringify(todos));
    return (
      <div className="App">
        <div className="todo-header" />
        <div className="todo-wrapper">
          <div className="todo-content">
            <h1>TO DO LIST</h1>
            <SubmitForm addTask={this.addTask} />
            <TasksList
              tasks={this.state.tasks}
              removeTask={this.removeTask}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
