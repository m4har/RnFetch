import React from 'react'
import { Header, Container, Content, Text, List, ListItem, Icon, Input, Item, Fab, Button } from 'native-base'
import { ActivityIndicator, FlatList , View, ScrollView} from 'react-native'
import axios from 'axios'

export default class Todo extends React.Component {

  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount() {
    
    axios.get(`http://35.237.4.180:5000/api/heroes/`)
      .then(res => {
        const list = res.data;
        this.setState({ isLoading: false, list },
          function () {

          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
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
          {this.state.list.map((list, index) => (
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

