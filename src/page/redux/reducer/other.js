const initialState = {
    other: 2,
}

export default function(state = initialState, actions) {
    const { type } = actions;
    switch(type) {
        case "OTHER_CHANGE":
            return { ...state, other: state.other + 1 };
        default:
            return { ...state };
    }
}