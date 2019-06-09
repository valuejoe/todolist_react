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

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const addTask = (state) => {
    return {
        type:'ADD_TASK',
        payload:state
    }
}