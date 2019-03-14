const logger = store => next => action => {
    let result = next(action);
    if (result) {
        console.log('next state', store.getState());
        console.groupEnd();   
    }
    return result
}
  
export default logger