import React from "react";
import "./Task.css";
import { ReactComponent as SVGIcon } from "../Images/delete.svg";
import { ReactComponent as SVGI } from "../Images/done.svg";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
    this.markDone = this.markDone.bind(this);
    this.state = {
      backgroundColor: "",
    };
  }

  removeTask() {
    this.props.removeTask(this.props.id);
  }

  markDone = () => {
    this.props.onChange(this.props.id);
  };

  render() {
    return (
      <div>
        <div className="task-container ">
          <div
            className="task-container-background border-gray box-shadow"
            style={{
              backgroundColor: this.props.done ? "rgb(144,238,144, 0.5)" : "",
            }}
          >
            <div className="task-term-container">
              <h2 className="task-term ">{this.props.text}</h2>
            </div>
            <div className="buttons-container">
              <button
                className="done-button"
                onClick={this.markDone}
                value={this.props.done}
              >
                <SVGI />
              </button>

              <button className="delete-button" onClick={this.removeTask}>
                <SVGIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
