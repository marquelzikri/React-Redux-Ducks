import { combineReducers } from 'redux';

import testItemReducer from "../../components/TestItem/reducer";

export default combineReducers({
    testItem: testItemReducer
});
