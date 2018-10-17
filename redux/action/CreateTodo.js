// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';

// // or any pure javascript modules available in npm
// import { Card, List, ListItem, SearchBar } from 'react-native-elements'; // 0.19.1

// export default class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       fruits: [
//         { name: 'banana' },
//         { name: 'mango' },
//         { name: 'orange' },
//         { name: 'cerry' }
//       ],
//       fruitsProcessed: []
//     }
//   }

//   componentWillMount() {
//     this.setState({ fruitsProcessed: this.state.fruits })
//   }

//   handleSearch = src => {
//     let fruitFiltered = []
//     this.state.fruits.filter(data => {
//       if (data.name.toLowerCase().indexOf(src.toLowerCase()) != -1) {
//         fruitFiltered.push(data)
//       }
//     })
//     this.setState({ fruitsProcessed: fruitFiltered })
//   }

//   render() {
//     return (
//       <View>
//         <Card>
//           <SearchBar
//             round
//             onChangeText={this.handleSearch}
//             placeholder='Type Here...' />
//           <List>
//             {
//               this.state.fruitsProcessed.map((fruit) => (
//                 <ListItem
//                   title={fruit.name}
//                 />
//               ))
//             }
//           </List>
//         </Card>
//       </View>
//     );
//   }
// }

