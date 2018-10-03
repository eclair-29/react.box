import React from 'react'

const Images = props => {
    const open_modal = () => {
        props.handle_open()
    }

    const { image } = props

    return (
        <div 
            onClick={ open_modal } 
            className="image-container" 
        >
            <img 
                src={ image.largeImageURL } 
                alt={ image.tags } 
            />
        </div>
    )
}

export default Images