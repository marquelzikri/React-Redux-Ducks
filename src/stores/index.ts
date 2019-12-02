import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";


let initialState: any = {};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools()
);

export default store;
