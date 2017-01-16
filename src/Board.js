import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import Post from './Post'
import { movePost } from './actions'

const boardTarget = {
    canDrop() {},
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
        const { connectDropTarget, isOver, canDrop, getSourceClientOffset
        } = this.props
        return connectDropTarget(
            <div style={{
                width: '600px',
                height:'600px',
                backgroundColor: 'SteelBlue'
            }}>
                <Post />
            </div>
        )
    }
}

export default DropTarget("POST", boardTarget, collect)(Board)
