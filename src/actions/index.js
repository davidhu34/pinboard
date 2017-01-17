export const movePost = ( id, position ) => ({
    type: 'MOVE',
    id: id,
    ...position
})

export const deletePost = (id) => ({
    type: 'DELETE',
    id, id
})

export const newPost = (id) => ({
    type: 'NEW',
    id: id
})
