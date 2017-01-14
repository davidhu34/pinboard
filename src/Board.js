import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import Post from './Post'
import { movePost } from './actions'

const boardTarget = {
    canDrop({ x, y }) {},
    hover({ movePost } , moniter) {
        const pos = moniter.getSourceClientOffset()
        movePost(pos)
    }
}

const collect = (connect, moniter) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: moniter.isOver(),
        canDrop: moniter.canDrop(),
        getSourceClientOffset: moniter.getSourceClientOffset()
    }
}


class Board extends Component {
    render() {
        const { x, y,
        connectDropTarget, isOver, canDrop, getSourceClientOffset
        } = this.props
        return connectDropTarget(
            <div style={{
                width: '600px',
                height:'600px',
                backgroundColor: 'SteelBlue'
            }}>
                <Post position={{x,y}}/>
            </div>
        )
    }
}

Board = DropTarget("POST", boardTarget, collect)(Board)
export default connect(
    state => {
        console.log(state.dnd)
        return state.dnd
    },
    dispatch => ({
        movePost: (pos) => dispatch( movePost(pos) )
    })
)(Board)
