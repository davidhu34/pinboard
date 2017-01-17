import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Board from './Board'
import Bin from './trashBin'

const App = () => (
    <div>
        <Board />
        <Bin />
    </div>
)

export default DragDropContext(HTML5Backend)(App)
