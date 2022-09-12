import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
    return (
        <div className="container">
            <h4 className="my-3">Your Todo List Is Here</h4>
            {props.todos.length === 0 ? "No item in to-do list" : 
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}

export default Todos