import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Board from './Board'


const App = () => (
    <div>
        <Board />
    </div>
)

export default DragDropContext(HTML5Backend)(App)
