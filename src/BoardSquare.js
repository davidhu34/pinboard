import React, { Component, PropTypes } from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './Constants'
import Square from './Square'
import { moveKnight, canMoveKnight } from './Game'

const squareTarget = {
    canDrop({ x, y }) {
        return canMoveKnight(x, y)
    },    
    drop({ x, y }) {
        moveKnight(x, y)
    }
}

const collect = (connect, moniter) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: moniter.isOver(),
    canDrop: moniter.canDrop()
})

class BoardSquare extends Component {
    renderOverlay (color) {
        return <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: color,
                }} />
    }

    render () {
        const { x, y, connectDropTarget, isOver, canDrop } = this.props
        const black = (x + y) % 2 === 1

        return connectDropTarget(
            <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        )
    }
}

BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
}
export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)
