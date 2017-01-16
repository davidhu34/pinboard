export const movePost = ( id, position ) => ({
    type: 'MOVE',
    id: id,
    ...position
})
