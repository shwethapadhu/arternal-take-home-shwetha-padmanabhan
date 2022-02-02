export const createTask = (task) => dispatch => {
    dispatch({
        type: "CREATE_TASK",
        payload: {
            task
        }
    })
}

export const donetask = (date) => dispatch => {
    dispatch({
        type: "DONE_TASK",
        payload: {
            date
        }
    })
}