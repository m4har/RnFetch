import React from 'react';
import { Container, Content, Input, Button, Text, Footer } from 'native-base'
import axios from 'axios'
import { CreateList } from '../../redux/action/ListsAction';
import {connect} from 'react-redux' 
import { createStore } from 'redux';

class AddTodo extends React.Component {

constructor(props){
  super(props)
}

  state = {
    inputan: '',
  }
  changeName = (text) => {
    this.setState({ inputan: text })
  }
  changeButton =() =>{
    this.props.dispatch(CreateList({
      todo: this.state.inputan
    }))
    // axios.post('http://35.237.4.180:5000/api/heroes/',{
    //   todo: this.state.inputan
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
      this.props.navigation.pop()
    }

  render() {
    return (
      <Container>
        <Content>
          <Input
          onChangeText={this.changeName}
          placeholder="type Todo..."/>
          <Text>{this.state.inputan}</Text>
        </Content>
        <Footer>
          <Button onPress={this.changeButton}>
            <Text>Add</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStoreToProps = state => ({
  todo: state.Lists
})

export default connect(mapStoreToProps)(AddTodo)