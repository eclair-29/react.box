import React, { Component } from 'react'
import { Modal, Header, ModalContent } from 'semantic-ui-react'

import Images from './Images'

class Dialog extends Component {
    state = { show: false }

    handle_open = () => {
        this.setState({ show: true })
    }

    handle_close = () => {
        this.setState({ show: false })
    }

    render() {
        const { image } = this.props

        return (
            <Modal
                trigger={ 
                    <Images
                        handle_open={ this.handle_open } 
                        image={ image } 
                        show={ this.state.show } 
                    /> }
                open={ this.state.show }
                onClose={ this.handle_close }
                size='small'
            >
                <Header content={ `uploaded by: ${image.user}` } />
                <ModalContent>
                    <div className="image-preview">
                        <img src={ image.largeImageURL } alt={ image.tags } />
                    </div>
                </ModalContent>
            </Modal>
        )
    }
}

export default Dialog