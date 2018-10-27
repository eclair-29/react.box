import React from 'react'
import moment from 'moment'

const Notifications = ({ notifications }) => {
    return (
        <div className="container">
            <div className="ui segments">
                { notifications && notifications
                .map(notification => { 
                    return (
                        <div className="ui segment" key={ notification.id }>
                            <p>{ `${notification.user} ${notification.content}` }</p>
                            <span>{ moment(notification.timestamp.toDate()).fromNow() }</span>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Notifications