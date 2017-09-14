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
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle} >
        <Text style={styles.textStyle}>
          {this.props.buttonTitle}
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#2E4057',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    borderTopWidth: 4,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#2E4057',
    marginTop: 4,
    marginBottom: 4
  }
};

export default Button;
