import React from 'react';

export default props => (
    <li className='success'>
        <p>{props.text}</p>
        <button className = "edit-todo" >Edit</button>
        <button className = "delete-todo"  >Delete</button>
    </li>
);



          {/* <TodoItem
              text={todoItem.text}
              priority={todoItem.priority}
              editEnabled={todoItem.editEnabled}
              /> */}