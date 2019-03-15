export const add = () => dispatch => {
    dispatch({ type: 'HOME_CHANGE'});
}
export const valueChange = (data) => dispatch => {
    dispatch({ type: 'HOME_VALUE_CHANGE', data });
}