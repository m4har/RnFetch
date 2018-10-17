// import { createStore, applyMiddleware } from 'redux'
// import { logger } from 'redux-logger'
// import { thunk } from 'redux-thunk'
// import { axios } from 'axios'

// const initialState = {
//   fetching: false,
//   fetched: false,
//   error: null,
//   todo: []
// }

// const reducer = function (state = initialState, action) {

//   switch (action.type) {
//     case 'FETCH_LIST_PENDING':
//       return { ...state, fetching: true }
//       break
//     case 'FETCH_LIST_FULFILLED':
//       return { ...state, fetching: false, fetched: true, todo: action.payload }
//       break
//     case 'FETCH_LIST_REJECTED':
//       return { ...state, fetching: false, error: action.payload }
//       break
//     default:
//   }

//   return state
// }
// const middleware = applyMiddleware(logger, thunk)

// const store = createStore(reducer, middleware)

// store.subscribe(() => {
//   console.log('current state = ', store.getState())
// })
// store.dispatch((dispatch) => {
//   dispatch({ type: 'FETCH_LIST_PENDING' })
//   axios.get('http://35.237.4.180:5000/api/heroes/')
//     .then((response) => {
//       dispatch({ type: 'FETCH_LIST_FULFILLED', payload: response.data })
//     })
//     .catch((err) => {
//       dispatch({ type: 'FETCH_LIST_REJECTED', payload: err })
//     })
// })