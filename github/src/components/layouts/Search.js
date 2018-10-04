import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Search = () => {
    const options = []

    return (
        <div className="search-bar">
            <Dropdown 
                placeholder="Search"  
                search 
                floating
                selection
                icon=""
                options={ options }
            />
        </div>
    )
}

export default Search