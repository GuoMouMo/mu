const initialState = {
    home: 1,
    value: '',
}

export default function(state = initialState, actions) {
    const { type, data } = actions;
    switch(type) {
        case "HOME_CHANGE":
            return { ...state, home: state.home + 1 };
        case "HOME_VALUE_CHANGE":
            return { ...state, value: data };
        default:
            return { ...state };
    }
}