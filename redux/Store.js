import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {logger} from 'redux-logger'

import reducer from './reducer/Index'

const middleware = applyMiddleware(logger ,thunk, promise())

export default createStore(reducer, middleware)