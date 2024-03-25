export const initialValue = 0

export const timeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "1min":
            return 1000 * 60;
        case "startTimer":
            return state - 10
        default:
            return state
    }
}
