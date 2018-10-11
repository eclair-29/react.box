import React from 'react'

const Todos = ({ todos, remove_todo, add_recent }) => {
    return (
        <div className="todos wrapper">
            <h4>My Activities
                <span>you have { todos.length } activities</span>
            </h4>

            { todos.length ? (
                todos.map(todo => {
                    return (
                        <div 
                            className="ui card" 
                            onClick={ () => {
                                remove_todo(todo.id)
                                add_recent(todo)
                            } }
                            key={ todo.id }
                        >
                            <div className="content">
                                { todo.content }
                            </div>
                        </div>
                    )
                })
            ) : (
                <p>No activities at this moment</p>
            ) }
        </div>
    )
}

export default Todos