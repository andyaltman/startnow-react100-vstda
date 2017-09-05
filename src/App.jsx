import React, { Component } from 'react';
//import TodoItem from './todoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.createNewTodoItem = this.createNewTodoItem.bind(this);
    this.dislayTodos = this.displayTodos.bind(this);
    this.editTodoItem = this.editTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.allowEditing = this.allowEditing.bind(this);
    
    this.state = {
      todos: [],
    };
  }

  createNewTodoItem() {
    const todos = this.state.todos;
    var text = $("#todo-text").val();
    var priority = $("#priority").val();
    var editEnabled = false;

    this.setState({
      todos: todos.concat([{
        text: text,
        priority: priority,
        editEnabled: editEnabled,
      }]),
    });
  }

  allowEditing(todoItem) {
    var updatedTodos = this.state.todos;
    var key = updatedTodos.indexOf(todoItem);
    var editingMenu = (
      <div id="editEnabledItem">
        <label>Description</label>
        <textarea className="update-todo-text"></textarea>
        <button className="update-todo" onClick ={() => this.editTodoItem(todoItem, key)}>Save</button>
      </div>
    );

    var updatedTodo = {
      text: editingMenu,
      priority: todoItem.priority
    };

    updatedTodos[key] = updatedTodo;

    this.setState({
      todos: updatedTodos
    });
  }

  editTodoItem(todoItem, key) {
    var updatedTodos = this.state.todos;

    var text = (
      <li> {$(".update-todo-text").val()} </li>
    );
    var priority = todoItem.priority;
    
    var updatedTodo = {
      text: text,
      priority: priority
    };

    updatedTodos[key] = updatedTodo;
    console.log(updatedTodo)
    this.setState({
      todos: updatedTodos
    });
    console.log(this.state.todos);
  }


  deleteTodoItem(todoItem) {
    var updatedTodos = this.state.todos;
    var key = updatedTodos.indexOf(todoItem);
    updatedTodos.splice(key,1);
    this.setState({
      todos: updatedTodos
    });
  }
  
  displayTodos(todos) {
    var todoList = this.state.todos;
    if (todoList.length > 0) {
      return (
        <div id="todo-list">
          {
          this.state.todos.map(todoItem => (
              <li className='success'>
                <p>{todoItem.text}</p>
                    <button className = "edit-todo" onClick = {() => this.allowEditing(todoItem)}>Edit</button>
                    <button className = "delete-todo"  onClick = {() => this.deleteTodoItem(todoItem)}>Delete</button>
              </li>
           ))
          }
        </div>
      )} else {
        return (
          <div id="info-panel">
            <p><b>Welcome to Very Simple Todo App!</b></p>
            <p>Get started now by adding a new todo on the left</p>
          </div>
      )}
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
            <textarea type="textarea"  className="create-todo-text" id="todo-text"></textarea>
          
            <div className="form-group">
              <label> How much of a priority is this? </label>
              <select className="create-todo-priority" id="priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>

          <div className="panel-footer">
            <button type="button" className="btn btn-success" className="create-todo" id="add-button"
            onClick = {this.createNewTodoItem} >Add</button>
          </div>
        </div>

{/* Todo list on the right */}
        <div className="panel panel-default" id="todo-list">
          <div className ="panel-heading">View Todos</div>  
          {this.displayTodos(this.state.todos)}
        </div>
      </div>
    );
  }

}

export default App;
