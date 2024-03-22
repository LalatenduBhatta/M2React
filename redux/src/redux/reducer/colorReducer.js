let initialValue = {
    textColor: "white",
    bgColor: { red: 0, green: 0, blue: 0 }
}

export function colorReducer(state = initialValue, action) {
    switch (action.type) {
        case "text":
            return { ...state, textColor: action.payload }
        case "bg":
            return { ...state, bgColor: action.payload }
        default:
            return state;
    }
}