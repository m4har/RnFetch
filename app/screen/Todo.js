import React from 'react'
import { View, Header, Container, Content, Text, List, ListItem, Icon, Input, Item, Fab, Button, Left, Body, Right } from 'native-base'
import { ActivityIndicator, FlatList , ScrollView} from 'react-native'
import axios from 'axios'


//redux mengambil class
import {connect} from 'react-redux'
import {FetchList, DeleteList} from '../../redux/action/ListsAction'

class Todo extends React.Component {

  
  componentDidMount() {
    this.props.dispatch(FetchList())
  }

  handleDelete(id){
    this.props.dispatch(DeleteList(id))
  }
  
  render() {
    let b = 0
    
    if (this.props.todo.fetching) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Container>
        <Header searchBar
          style={{
            backgroundColor: '#fff',
            borderColor: '#000',
            borderRadius: 100,
            top: 20,
            height: 45,
            borderStyle: 'solid'
          }
          }>
          <Item style={{}}>
            <Icon name='ios-search' />
            <Input placeholder='search' />
          </Item>
        </Header>
        {/* <Content> */}
          <List style={{ top: 40, height:550 }}>
          <ScrollView>
          {this.props.todo.list.map((list, index) => (
            <ListItem  key={index}>
              <Left style={{flexDirection:'row'}}>
                  <Text>{index + 1}. </Text>
                  <Text>{list.todo}</Text>
              </Left>
              
              <Right>
                <Button full danger onPress={()=> this.handleDelete(list._id)} backgroundColor="red">
                  <Text>X</Text>
                </Button>
              </Right>
          </ListItem>
            )
            )}
          </ScrollView>
          </List>
        {/* </Content> */}
        <Fab
          onPress={() => this.props.navigation.navigate('AddTodo')}
          style={{ backgroundColor: '#2ecc71' }}
          position="bottomRight">
          <Icon
            name="md-add" />
        </Fab>
      </Container>
    )
  }
}

const mapStoreToProps = state => ({
  todo: state.Lists
})

export default connect(mapStoreToProps)(Todo)