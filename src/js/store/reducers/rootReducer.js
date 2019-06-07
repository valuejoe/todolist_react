import arrayMove from 'array-move';

// const initState = {
//     tasks: [
//         { id: '1', star: false, edit: false, title: '寫程式', completed: false },
//         { id: '2', star: false, edit: false, title: '買午餐', completed: false },
//         { id: '3', star: false, edit: false, title: '玩遊戲', completed: false },
//         { id: '4', star: false, edit: false, title: '屁屁', completed: false },

//     ],
//     star:[
//         { id: '5', star: true, edit: false, title: '買電腦', completed: false },
//         { id: '6', star: true, edit: false, title: '買手機', completed: false }
//     ]
// }

const initState = {
    tasks: [
        [
            { id: '1', star: true, edit: false, title: '寫程式', completed: false },
            { id: '4', star: true, edit: false, title: '屁屁', completed: false }
        ],
        [
            { id: '2', star: false, edit: false, title: '買午餐', completed: false },
            { id: '5', star: false, edit: false, title: '買電腦', completed: false }
        ],
        [
            { id: '3', star: false, edit: false, title: '玩遊戲', completed: true }
        ]
    ]
}


const rootReducer = (state = initState, action) => {
    let newCollections = [...state.tasks]

    switch (action.type) {
        case 'CLICK_STAR':
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
                ...state,
                tasks:newCollections             
            }
        case 'CLICK_EDIT':
            console.log('click edit success!');

            newArray = state.tasks[action.payload.collection].map((item, index) => {
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

            console.log(newCollections)
            return {
                ...state,
                tasks:newCollections
            }
        case 'CLICK_Complete':
            console.log('click complete success!')
            // console.log(state.tasks[action.payload.collection][action.payload.index].completed)
            let oldCompleted = state.tasks[action.payload.collection][action.payload.index]
            newArray = state.tasks[action.payload.collection].map((item, index) => {
                if(item.id === action.payload.id) {
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
                
            })

            if(oldCompleted.completed && oldCompleted.star){
                let newCompleted = newArray.filter(task => {
                    return task.completed
                })

                newCollections[action.payload.collection] = newCompleted
                newCollections[0] = [newArray[action.payload.index], ...newCollections[0]]
            }else if(oldCompleted.completed && !oldCompleted.star) {
                let newCompleted = newArray.filter(task => {
                    return task.completed
                })

                newCollections[action.payload.collection] = newCompleted
                newCollections[1] = [newArray[action.payload.index], ...newCollections[1]]
            }else {
                let newCompleted = newArray.filter(task => {
                    return !task.completed
                })

                newCollections[action.payload.collection] = newCompleted
                newCollections[2] = [newArray[action.payload.index], ...newCollections[2]]
            }
            return {
                ...state,
                tasks:newCollections
            }
        case 'REORDER_LIST':

            newCollections[action.payload.collection] = arrayMove(
                state.tasks[action.payload.collection],
                action.payload.oldIndex,
                action.payload.newIndex)
            return {
                ...state,
                tasks: newCollections
            }
        default:
            return state
    }
}

export default rootReducer;