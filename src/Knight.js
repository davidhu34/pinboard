import React, { Component, PropTypes } from 'react'
import { ItemTypes } from './Constants'
import { DragSource } from 'react-dnd'

const knightSource = {
    beginDrag (props) {
        return {}
    }
}
const collect = (connect, moniter) => ({
    connectDragSource: connect.dragSource(),
    isDragging: moniter.isDragging()
})

const Knight = ({ connectDragSource, isDragging }) =>
    connectDragSource(
        <div style={{
            width: '100%',
            height:'100%',
            opacity: isDragging ? 0.5 : 1,
            fontSize: 23,
            fontWeight: 'bold',
            cursor: 'move'
        }}> ♘ </div>
    )

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
