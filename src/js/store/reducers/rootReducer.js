import arrayMove from 'array-move';

const initState = {
    tasks: [
        [
            { id: 1, star: true, edit: false, title: '寫程式', completed: false },
            { id: 4, star: true, edit: false, title: '屁屁', completed: false }
        ],
        [
            { id: 2, star: false, edit: false, title: '買午餐', completed: false },
            { id: 5, star: false, edit: false, title: '買電腦', completed: false }
        ],
        [
            { id: 3, star: false, edit: false, title: '玩遊戲', completed: true }
        ]
    ],
    id: 6
}


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CLICK_STAR':
            console.log('click star success!');

            return {
                ...state,
                tasks: CLICK_STAR_FUNCTION(state, action).tasks
            }
        case 'CLICK_EDIT':
            console.log('click edit success!');

            return {
                ...state,
                tasks: CLICK_EDIT_FUNCTION(state, action).tasks
            }
        case 'CLICK_COMPLETED':
            console.log('click complete success!')
            return {
                ...state,
                tasks: CLICK_COMPLETED_FUNCTION(state, action).tasks
            }
        case 'REORDER_LIST':
            return {
                ...state,
                tasks: REORDER_LIST_FUNCTION(state, action).tasks
            }
        case 'ADD_TASK':
                return {
                    ...state,
                    id: state.id + 1,
                    tasks: ADD_TASK_FUNCTION(state, action).tasks
                }
        case 'DELETE_TASK':
                return {
                    ...state,
                    tasks: DELETE_TASK_FUNCTION(state, action).tasks
                }
        default:
            return state
    }
}

export default rootReducer;

const DELETE_TASK_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]
    newCollections[action.payload.collection] = newCollections[action.payload.collection].filter(task => {
        return task.id !== action.payload.id
    })
    console.log(newCollections[action.payload.collection])
    return {
        tasks:newCollections
    }
}

const CLICK_STAR_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]

    let newArray = state.tasks[action.payload.collection].map((item, index) => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                star: !item.star
            }
        }
        return item
    })
    if (action.payload.star) {
        let newStar = newArray.filter(task => {
            return task.star
        })

        newCollections[action.payload.collection] = newStar
        newCollections[1] = [newArray[action.payload.index], ...newCollections[1]]
    } else {
        let newStar = newArray.filter(task => {
            return !task.star
        })

        newCollections[action.payload.collection] = newStar
        newCollections[0] = [newArray[action.payload.index], ...newCollections[0]]
    }

    return {
        tasks: newCollections
    }
}

const CLICK_EDIT_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]
    let newArray = state.tasks[action.payload.collection].map((item, index) => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                edit: !item.edit
            }
        }
        return item
    })

    newCollections = [...state.tasks]
    newCollections[action.payload.collection] = newArray
    return {
        tasks: newCollections
    }
}

const CLICK_COMPLETED_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]
    let oldCompleted = state.tasks[action.payload.collection][action.payload.index]
    let newArray = state.tasks[action.payload.collection].map((item, index) => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                completed: !item.completed
            }
        }
        return item

    })

    if (oldCompleted.completed && oldCompleted.star) {
        let newCompleted = newArray.filter(task => {
            return task.completed
        })

        newCollections[action.payload.collection] = newCompleted
        newCollections[0] = [newArray[action.payload.index], ...newCollections[0]]
    } else if (oldCompleted.completed && !oldCompleted.star) {
        let newCompleted = newArray.filter(task => {
            return task.completed
        })

        newCollections[action.payload.collection] = newCompleted
        newCollections[1] = [newArray[action.payload.index], ...newCollections[1]]
    } else {
        let newCompleted = newArray.filter(task => {
            return !task.completed
        })

        newCollections[action.payload.collection] = newCompleted
        newCollections[2] = [newArray[action.payload.index], ...newCollections[2]]
    }
    return {
        tasks: newCollections
    }
}

const REORDER_LIST_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]
    newCollections[action.payload.collection] = arrayMove(
        state.tasks[action.payload.collection],
        action.payload.oldIndex,
        action.payload.newIndex)
    return {
        tasks: newCollections
    }
}

const ADD_TASK_FUNCTION = (state, action) => {
    let newCollections = [...state.tasks]
    let newTask = {id: state.id, star: false, edit: false, title: action.payload.title, completed: false}
    newCollections[1] = [newTask, ...newCollections[1]]
    return {
        tasks: newCollections
    }
}