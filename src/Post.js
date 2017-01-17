import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'


const PostSource = {
    beginDrag ({ id }) {
        return { id }
    }
}
const collect = (connect, moniter) => ({
    connectDragSource: connect.dragSource(),
    isDragging: moniter.isDragging()
})

const Post = ({ x, y, id,
    connectDragSource, isDragging
}) => {
    const print = isDragging?  null: '♘'
    const opacity = isDragging ? 0.8 : 1
    return connectDragSource(
        <div style={{
            position:'absolute',
            left: x+'px',
            top: y+'px',
            opacity: opacity,
            fontSize: 50,
            fontWeight: 'bold',
            backgroundColor: 'white',
            cursor: 'move'
        }}>{print}</div>
    )
}

Post.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource("POST", PostSource, collect)(Post)
