import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    return (
        <div className="container">
            <h4 className="text-center my-3">Todos List</h4>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}

export default Todos