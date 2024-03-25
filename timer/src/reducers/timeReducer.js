export const initialValue = 0

export const timeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "1min":
            return 1000 * 60;
        case "5min":
            return 1000 * 60 * 5;
        case "10min":
            return 1000 * 60 * 10;
        case "15min":
            return 1000 * 60 * 15;
        case "30min":
            return 1000 * 60 * 30;
        case "1hr":
            return 1000 * 60 * 60;
        case "startTimer":
            return state - 10
        default:
            return state
    }
}
