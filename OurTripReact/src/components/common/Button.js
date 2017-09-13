import React, { Component } from 'react';
import axios from 'axios';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Button extends Component {
  constructor(props){
    super(props);
    state = {
      users: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/users')
    .then(response => this.setState({ users: response.data}))
    .catch(error => console.log(error))
  }

  render(){  
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.buttonStyle} >
        <Text style={styles.textStyle}>
          Add a destination
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
