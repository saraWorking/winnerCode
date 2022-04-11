import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers from './reducers/appReducers';
import appMiddleware from './middelwares/appMiddleware';

const store = createStore(
    appReducers, composeWithDevTools(
        applyMiddleware(
            ...appMiddleware
        ),
    )
)

window.store = store
export default store;