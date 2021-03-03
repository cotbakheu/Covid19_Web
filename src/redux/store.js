import {createStore, applyMiddleware} from 'redux'
import root from './root'
import reduxPromise from 'redux-promise-middleware'

const middleware = applyMiddleware(reduxPromise)

const storeRedux = createStore(root, middleware)

export default storeRedux