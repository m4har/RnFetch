import React from 'react'
import {Provider} from 'react-redux'

import Store from './redux/Store'

import Navigate from './app/navigation/Index'
const App = () =>(
  <Provider store={Store}>
    <Navigate/>  
  </Provider>
)
export default App
