import { createStore, combineReducers } from 'redux'
import postsReducer from  './reducers/posts'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})



const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig