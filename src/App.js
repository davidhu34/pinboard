
import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Post from './Post'


const App = () => (
    <div style={{
        width: '600px',
        height:'600px',
        backgroundColor: 'SteelBlue'
    }}>
        <Post/>
    </div>
)

export default DragDropContext(HTML5Backend)(App)
