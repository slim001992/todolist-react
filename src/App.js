import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todo: "",
    todos: [{ text: 'Task1', id: Math.random(), }]
  }
 //user input
  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  //add new task
  addTodo = () => {
    if (this.state.todo.length) {
      this.setState({
        todos: [...this.state.todos, {
          text: this.state.todo,
          id: Math.random(),
          done: false
        }],
        todo: ''
      })
    }
  }
  //remove tasks 
  removeTodo(i) {
    this.setState({
      todos: this.state.todos.filter((el, index) => index !== i)
    });
  }

  //complete tasks
  completeTodo(i) {
    this.setState({
      todos: this.state.todos.map((el, index) => index === i ? { ...el, done: !el.done } : el)
    })
  }

  render() {

    return (
      <div className="App">
        <div className="add">
          <h1 class="titre">To-Do-App</h1>
          <p class="titre">Add new Task</p>
          <input placeholder="  Add new Task" type="text" value={this.state.todo} onChange={this.handleChange} />
          <br />
          <button type='submit' className="button button-right" value="ADD" onClick={this.addTodo}  >submit</button>
        </div>
        <div className="new-add">
          <ul>
            <li><h2 className="text">Let's get some work done !</h2></li>

            {
              this.state.todos.map((el, i) =>
                <li key={i} >
                  <div className="new">
                    <button className="hoover" onClick={() => this.completeTodo(i)}>{el.done ? "undo" : "Complete"}</button>
                    <button className="hoover" onClick={() => this.removeTodo(i)}>delete</button>
                    <h3 className={el.done ? "done" : "undone"} >{el.text}</h3>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;







