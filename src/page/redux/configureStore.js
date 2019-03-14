import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './logger'
import monitorReducerEnhancer from './monitorReducer'
import reducer from './reducer';

export default function configureStore(preloadedState) {
    // 扩展
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    // 增强
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(reducer, preloadedState, composedEnhancers);
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducer', () => store.replaceReducer(reducer))
    }
    return store;
}