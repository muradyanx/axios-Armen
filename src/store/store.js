
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
const rootReducers = combineReducers({
    userReducer
})

const store = createStore(rootReducers)

export default store