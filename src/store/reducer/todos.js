export default function (state = {
    todoList: [],
    doneList: []
}, action) {
    switch (action.type) {
        case "CREATE_TASK":
            return { ...state, todoList: [...state.todoList, { ...action.payload.task, date: Date.now() }] }
        case "DONE_TASK":
            const filteredtask = state.todoList.find(item => item.date == action.payload.date)
            return { ...state, todoList: state.todoList.filter(item => item.date != action.payload.date), doneList: [...state.doneList, filteredtask] }
    }
    return state
}