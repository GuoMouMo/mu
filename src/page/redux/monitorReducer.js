import { combineReducers } from 'redux';
const round = number => Math.round(number * 100) / 100
const monitorReducerEnhancer = createStore => (
    reducer,
    initialState,
    enhancer
) => {
    const monitoredReducer = (state, action) => {
        const isInClient = typeof window !== 'undefined';
        const start = (isInClient && performance.now()) || 0;
        const newState = combineReducers(reducer)(state, action);
        const end = (isInClient && performance.now()) || 0;
        const diff = round(end - start);
        console.group(action.type);
        console.log(state, action);
        console.log('reducer process time:', diff);
        return newState
    };
    return createStore(monitoredReducer, initialState, enhancer);
}

export default monitorReducerEnhancer;
