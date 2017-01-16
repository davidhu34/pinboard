import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'

import { movePost } from './actions'

const PostSource = {
    beginDrag (props) {
        return {}
    },
    endDrag ({ movePost }, moniter) {
        const pos = moniter.getSourceClientOffset()
        movePost(pos)
    }
}
const collect = (connect, moniter) => ({
    connectDragSource: connect.dragSource(),
    isDragging: moniter.isDragging()
})

class Post extends Component {
    render() {
        const {    x, y,
            connectDragSource, isDragging
        } = this.props
        const print = isDragging?  null: '♘'
        return connectDragSource(
        <div style={{
            position:'absolute',
            left: x+'px',
            top: y+'px',
            opacity: isDragging ? 0.8 : 1,
            fontSize: 50,
            fontWeight: 'bold',
            backgroundColor: 'white',
            cursor: 'move'
        }}>{print}</div>
    )}
}
Post.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

Post = DragSource("POST", PostSource, collect)(Post)
export default connect(
    state => state.dnd,
    dispatch => ({
        movePost: (pos) => dispatch( movePost(pos) )
    })
)(Post)
