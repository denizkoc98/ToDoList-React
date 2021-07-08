import React from "react";
import "./SubmitForm.css";

let todos = [];
class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }
  handleChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  addItem = (e) => {
    
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        category: this.textInput.value,
        id: Math.random(),
        key: Date.now(),
        done: false,
      };

      let a = JSON.parse(localStorage.getItem("todos"));
      if (a == null) {
        todos = [];
      } else {
        todos = a;
      }

      todos.push(newItem);
      localStorage.setItem("todos", JSON.stringify(todos));

      this.props.addTask(newItem);

      this._inputElement.value = "";
      this.textInput.value = "";
    }

    e.preventDefault();
  };
  //onChange={this.handleChangeCategory}
  render() {
    return (
      <div className="form">
        <form onSubmit={this.addItem}>
          <input
            className="input border-gray box-shadow"
            ref={(a) => (this._inputElement = a)}
            placeholder="Add Task"
          />
          <input
            className="input border-gray box-shadow"
            ref={(e) => (this.textInput = e)}
            placeholder="Type Category"
          />
          <button className="add-button border-gray" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default SubmitForm;
