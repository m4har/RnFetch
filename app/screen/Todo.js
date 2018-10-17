import React from 'react'
import { Header, Container, Content, Text, List, ListItem, Icon, Input, Item, Fab, Button } from 'native-base'
import { ActivityIndicator, FlatList , View, ScrollView} from 'react-native'
import axios from 'axios'


//redux mengambil class
import {connect} from 'react-redux'
import {FetchList} from '../../redux/action/ListsAction'

class Todo extends React.Component {



  componentDidMount() {
    this.props.dispatch(FetchList())
  }

  render() {

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
        <Content>
          <List style={{ top: 40, height:500 }}>
          <ScrollView>
          {this.props.todo.list.map((list, index) => (
            <ListItem key={index}>
            <Text>{list.todo}</Text>
          </ListItem>
            )
            )}
          </ScrollView>
          </List>
        </Content>
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