import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

// Actions 
import { search_users } from '../../store/actions/search_actions'

class Search extends Component {
    state = {
        query: ''
    }

    handle_search = e => {
        this.setState({ 
            [e.target.id]: e.target.value 
        }, () => {
            this.props.search_users(this.state.query)
        })
    }

    render() {
        console.log(this.props.options)
        return (
            <div className="search-bar">
                <Input
                    placeholder="Search anything"
                    id="query"
                    value={ this.state.query }
                    onChange={ this.handle_search }
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        options: state.search.options
    }
}

export default connect(mapStateToProps, { search_users })(Search)