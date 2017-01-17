import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import Post from './Post'

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

let Board = ({ order, posts,
    connectDropTarget, isOver, canDrop, getSourceClientOffset
}) => {
    const postsOnBoard = order.map( id => {
        const { x, y } = posts[id]
        return <Post x={x} y={y} key={id} id={id}/>
    })
    return connectDropTarget(
        <div style={{
            width: '600px',
            height:'600px',
            backgroundColor: 'SteelBlue'
        }}>
            {postsOnBoard}
        </div>
    )
}

Board = DropTarget("POST", boardTarget, collect)(Board)
export default connect(
    state => ({
        ...state.postList
    })
)( Board )
