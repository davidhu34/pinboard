import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

const PostSource = {
    beginDrag (props) {
        return {}
    }
}
const collect = (connect, moniter) => ({
    connectDragSource: connect.dragSource(),
    isDragging: moniter.isDragging()
})

const Post = ({ connectDragSource, isDragging }) =>
    connectDragSource(
        <div style={{
            position:'absolute',
            top: '50px',
            left: '10px',
            opacity: isDragging ? 0.8 : 1,
            fontSize: 50,
            fontWeight: 'bold',
            cursor: 'move'
        }}> ♘ </div>
    )

Post.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource("POST", PostSource, collect)(Post)
