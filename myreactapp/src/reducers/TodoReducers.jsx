
export function todoReducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter((e, i) => i !== action.payload)
        case "edit":
            return state.map((e, i) => {
                if (i == action.payload.index) {
                    return action.payload.task
                } else {
                    return e
                }
            })
        default:
            return state;
    }
}