import { combineReducers } from 'redux'

const initOrder = ['0','1']
const initPosts = {
    '0': {
        x:50,
        y:50,
        z:0,
        color: 'white'
    },
    '1': {
        x:50,
        y:40,
        z:0,
        color: 'white'
    }
}
const post = ( state, action ) => {
    switch ( action.type ) {
        case 'MOVE':
            return {
                ...state,
                x: action.x,
                y: action.y
            }
        default:
            return state
    }
}

const posts = ( state = initPosts, action ) => {
    switch ( action.type ) {
        case 'MOVE':
            return {
                ...state,
                [action.id]:
                    post( state[action.id], action )
            }
        default:
            return state
    }
}
const order = ( state = initOrder, action ) => {
    switch ( action.type ) {
        case 'MOVE':
            const idx = state.indexOf(action.id)
            return [
                ...state.slice(0,idx),
                ...state.slice(idx+1),
                action.id
            ]
        default:
            return state
    }
}

export default combineReducers({
    order, posts
})
