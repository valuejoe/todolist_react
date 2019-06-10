export const clickStar = (id, index, collection, star) => {
    return{
        type: 'CLICK_STAR',
        payload: {id, index, collection, star}
    }
}

export const clickEdit = (id, index, collection) => {
    return{
        type: 'CLICK_EDIT',
        payload: {id, index, collection}
    }
}

export const clickComplete = (id, index, collection) => {
    return{
        type: 'CLICK_COMPLETED',
        payload: {id, index, collection}
    }
}

export const sortableList = (oldIndex, newIndex, collection) => {
    return {
        type: 'REORDER_LIST',
        payload: {oldIndex, newIndex, collection},
    }
}

export const deleteTask = (id, index, collection) => {
    return {
        type: 'DELETE_TASK',
        payload: {id, index, collection}
    }
}

export const addTask = (state) => {
    return {
        type:'ADD_TASK',
        payload:state
    }
}

export const updateTask = (id, index, collection,state) => {
    return {
        type:'UPDATE_TASK',
        payload:{id, index, collection,state}
    }
}