import React, { Component } from 'react'
import { Input, Dropdown } from 'semantic-ui-react'
import axios from 'axios'

import Dialog from './Dialog'

class Search extends Component {
    state = {
        search: '',
        amount: 18,
        images: []
    }

    onTextChange = e => {
        const val = e.target.value
        const apiKey = '10250003-123a93b8b451ad17f3c539e41'
        const apiURL = 'https://pixabay.com/api'

        this.setState({
            [e.target.id]: val
        }, () => {
            if (val === '') {
                this.setState({ images: [] })
            } else {
                axios.get(`${apiURL}/?key=${apiKey}&q=${this.state.search}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }  
        })
    }

    onAmountChange = (e, { value }) => this.setState({ amount: value })

    render() {
        console.log(this.state.images)

        const options = [
            { key: 6, text: '6', value: 6 },
            { key: 18, text: '18', value: 18 },
            { key: 27, text: '27', value: 27 },
            { key: 36, text: '36', value: 36 }
        ]

        const { images } = this.state

        return (
            <div className="search">
                <Input 
                    action={ 
                        <Dropdown 
                            options={ options } 
                            onChange={ this.onAmountChange } 
                            value={ this.state.amount } 
                            compact
                            selection
                        /> }
                    placeholder='Search images'
                    id='search'
                    value={ this.state.search }
                    onChange={ this.onTextChange }
                    fluid
                />

                <div className="search-results">
                    { images.length ? (
                        images.map(image => {
                            return <Dialog image={ image } key={ image.id } />
                        })
                    ) : (
                        <p className="no-image">Try to search some images</p>
                    ) }
                </div>
            </div>
        )
    }
}

export default Search