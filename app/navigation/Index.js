import { createStackNavigator } from 'react-navigation'

import Todo from '../screen/Todo'
import AddTodo from '../screen/AddTodo'


const RootStack = createStackNavigator(
  {
    Todo:{
      screen:Todo,
    },
    AddTodo:{
      screen:AddTodo,
    },
  },
  {
    initialRouteName: 'Todo',
  }
)

export default RootStack