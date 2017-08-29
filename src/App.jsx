import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      todos: []
    };
  }


  render() {
    return (
      <div className='container'>
        <div className="page-header">
          <h1>Very Simple Todo App</h1>
          <p>Track all of the things</p>
        </div>

{/* Input fields on the left */}
        <div className="panel panel-default" id="inputs">
          <div className ="panel-heading">Add New Todo</div>
          
          <div className="panel-body">
            <label> I want to... </label>
            <textarea type="textarea"  className="form-control" id="todo"></textarea>
          
            <div className="form-group">
              <label> How much of a priority is this? </label>
              <select className="form-control" id="priority">
                <option>Low</option>
                <option>Medim</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="panel-footer">
            <button type="button" className="btn btn-success" id="add-button"
            onClick = {this.handleClick} >Add</button>
          </div>
        </div>

{/* Todo list on the right */}
        <div className="panel panel-default" id="todo-list">
          <div className ="panel-heading">View Todos</div>
          <div id="info-panel">
            <p><b>Welcome to Very Simple Todo App!</b></p>
            <p>Get started now by adding a new todo on the left</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
