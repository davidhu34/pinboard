const initPosts = {
    order: ['0','1'],
    posts: {
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

const postList = ( state = initPosts, action ) => {
    switch ( action.type ) {
        case 'MOVE':
            const { order, posts } = state
            const idx = order.indexOf(action.id)
            return {
                order: [
                    ...order.slice(0,idx),
                    ...order.slice(idx+1),
                    action.id
                ],
                posts: {
                    ...posts,
                    [action.id]:
                        post( state[action.postID], action )
                }
            }
        default:
            return state
    }
}

export { postList }
