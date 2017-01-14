const initDnd = {
    x:50,
    y:50,
    color: 'white'
}

const dnd = ( state = initDnd, action ) => {
    switch ( action.type ) {
        case 'MOVE':
        console.log(action)
            return {
                ...state,
                x: action.x,
                y: action.y
            }
        default:
            return state
    }
}

export default dnd
