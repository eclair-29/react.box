import React from 'react'

const Recents = ({ recents }) => {
    return (
        <div className="recents wrapper">
            <h4>Recents
                <span>you have { recents.length } recent activities</span>
            </h4>

            { recents.length ? (
                recents.map(todo => {
                    return (
                        <div 
                            className="ui card" 
                            key={ todo.id }
                        >
                            <div className="content">
                                { todo.content }
                            </div>
                        </div>
                    )
                })
            ) : (
                <p>No recent activities at this moment</p>
            ) }
        </div>
    )
}

export default Recents