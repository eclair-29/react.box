import React from 'react'
import { Link } from 'react-router-dom' 

const IssueSummary = () => {
    return (
        <Link to='/'>
            <div className="issue ui card">
                <div className="content">
                    <h4>Found a bug</h4>
                    <span>by: octocat</span>
                </div>
                <div className="content">
                    Issue Number: 1398
                </div>
            </div>
        </Link>
    )
}

export default IssueSummary