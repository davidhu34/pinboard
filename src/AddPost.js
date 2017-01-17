import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { newPost } from './actions'

let postCount = 2

const AddPost = ({ newPost }) => (
    <div style={{
        width: '100px',
        height:'100px',
        fontSize: 100,
        fontWeight: 'bold',
        backgroundColor: 'AliceBlue'
        }}
        onClick={() => newPost()}>
        +
    </div>
)

export default connect(
    state => ({}),
    dispatch => ({
        newPost: () => {
            const id = postCount++
            dispatch( newPost(id.toString()) )
        }
    })
)( AddPost )
