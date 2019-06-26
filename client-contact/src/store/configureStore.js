//create redux store
import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/user'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer
        
    }))
    return store
}

export default configureStore