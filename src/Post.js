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

class Post extends Component {
    render() {

            const {    position,
            connectDragSource, isDragging
        } = this.props
            console.log(this.props)
            const { x, y } = position
        return connectDragSource(
        <div style={{
            position:'absolute',
            left: x+'px',
            top: y+'px',
            opacity: isDragging ? 0.8 : 1,
            fontSize: 50,
            fontWeight: 'bold',
            cursor: 'move'
        }}> ♘ </div>
    )}
}
Post.propTypes = {
    position: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource("POST", PostSource, collect)(Post)
