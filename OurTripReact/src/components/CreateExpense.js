import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dock from './common/Dock';

class CreateExpense extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      total_amount: '',
      saved: false
    }

    this.createExpense = this.createExpense.bind(this)
    this.callCreateExpense = this.callCreateExpense.bind(this)
  }

  // componentWillMount() {
  //   fetch('http://localhost:3000/trips?access_token=' + this.props.accessToken)
  //   .then((data) => data.json())
  //   .then((jsonData) => {
  //     console.log(jsonData)
  //    this.setState({ trips: jsonData.trips });
  //   })
  // }

  renderTrips() {
    return this.state.trips.map(trip =>
      <TripDetail key={trip.id} trip={trip} />
      );
    }

  createExpense(name, total_amount) {
    const trip_id = this.state.trips.map(trip => {trip.id})
    console.log(trip_id)
    debugger
    fetch('http://localhost:3000/trips/1/expenses?name=' + name +'&total_amount=' + total_amount, {method: "POST" })
    .then(data => data.json())
    .then(jsonData => {
      if (jsonData.saved) {
        this.setState({ accessToken: jsonData.accessToken, registered: true });
        AlertIOS.alert('Registration Successful!')

        Actions.trips();
      } else {
        AlertIOS.alert(jsonData.errors.join("\n"))
      }
    })
    .catch((error) => {})
  }

  callCreateExpense() {
    this.createExpense(this.state.name, this.state.total_amount)
  }

  render() {
   return (
    <Container style={styles.container}>
          <Item>
            <Input
                placeholder="expense name"
                placeholderTextColor='#949799'
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={ name => this.setState({name})}
              />
          </Item>

          <Item>
            <Input
                placeholder="last name"
                placeholderTextColor='#949799'
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(total_amount) => this.setState({total_amount})}
              />
          </Item>
          <Button style={styles.hasmargin} onPress= {this.callCreateExpense}>
            <Text style={styles.buttontext}>Add Expense</Text>
          </Button>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  trips: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
})

export default CreateExpense;
