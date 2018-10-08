import React from 'react'

// Repo Summary
import RepoSummary from './RepoSummary'

const ReposList = ({ repos }) => {
    return (
        <div className="repos-list">
            { repos.length ? (
                repos.map(repo => <RepoSummary repo={ repo } key={ repo.id } />)
            ) : (
                <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading...</p>
            ) }
        </div>
    )
}

export default ReposList