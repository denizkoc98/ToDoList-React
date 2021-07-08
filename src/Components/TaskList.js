import React from "react";
import "./TaskList.css";
import Task from "./Task";
import _ from "lodash";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.tasks };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.tasks, this.state.data)) {
      this.setState({
        data: nextProps.tasks,
      });
    }
  }

  handleChange(val) {
  
    var filteredData;

    if (val.target.value === "") {
      filteredData = this.props.tasks;
    } else if (val.target.value === "true") {
      filteredData = this.props.tasks.filter(function (item) {
        return item.done === true;
      });
    } else if (val.target.value === "false") {
      filteredData = this.props.tasks.filter(function (item) {
        return item.done === false;
      });
    }
    this.setState({ data: filteredData });
  }
  handleCategoryChange(val) {
  
    var filteredData;

    if (val.target.value === "All Category") {
      filteredData = this.props.tasks;
    } else {
      filteredData = this.props.tasks.filter(function (item) {
        return item.category === val.target.value;
      });
    }

    this.setState({ data: filteredData });
  }

  render() {
    return (
      <div className="tasks-list-container">
        <div className="tasks-list">
          <select className='tasks-select'
            id="done"
            value={this.props.tasks.done}
            onChange={this.handleChange}
          >
            <option value="">All</option>
            <option value="true">Done</option>
            <option value="false">Undone</option>
          </select>
          <div>
            <label>
              Select category
              <select
                value={this.props.tasks.category}
                onChange={this.handleCategoryChange}
              >
                <option value="All Category">All Categories</option>
                {this.props.tasks.map((item) => (
                  <option key={item.id} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {this.state.data.map((task) => (
            <Task
              key={task.key}
              text={task.text}
              id={task.id}
              done={task.done}
              removeTask={this.props.removeTask}
              onChange={this.props.onChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TasksList;
