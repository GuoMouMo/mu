const initialState = {
    home: 1,
}

export default function(state = initialState, actions) {
    const { type } = actions;
    switch(type) {
        case "HOME_CHANGE":
            return { ...state, home: state.home + 1 };
        default:
            return { ...state };
    }
}