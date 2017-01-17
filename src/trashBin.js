import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import { deletePost } from './actions'

const binTarget = {
    canDrop () { return true },
    drop ( { deletePost }, moniter ) {
        const { id } = moniter.getItem()
        deletePost(id)
    }
}

const collect = (connect, moniter) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: moniter.isOver(),
        canDrop: moniter.canDrop(),
    }
}

let Bin = ({
    connectDropTarget, isOver, canDrop
}) => {
    let color = canDrop? 'Salmon' : 'AliceBlue'
    color = isOver? 'Tomato': color
    return connectDropTarget(
        <div style={{
            width: '100px',
            height:'100px',
            fontSize: 100,
            fontWeight: 'bold',
            backgroundColor: color
        }}>␡</div>
    )
}

Bin = DropTarget("POST", binTarget, collect)(Bin)
export default connect(
    state => ({}),
    dispatch => ({
        deletePost: (id) => dispatch( deletePost(id) )
    })
)( Bin )
