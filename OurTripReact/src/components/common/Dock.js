import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Dock extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  getTokenExpense() {
    Actions.Expense({accessToken: this.props.accessToken})
  }

  getTokenItinerary() {
    Actions.Itinerary({accessToken: this.props.accessToken})
  }

  getTokenTrips() {
    Actions.Trips({accessToken: this.props.accessToken})
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={this.getTokenTrips.bind(this)} accessToken={this.props.accessToken} >
              <Icon name="plane" ios="ios-plane" />
              <Text>Trips</Text>
            </Button>
            <Button vertical onPress={this.getTokenItinerary.bind(this)} accessToken={this.props.accessToken} >
              <Icon name="paper" ios="ios-paper" />
              <Text>Itinerary</Text>
            </Button>
            <Button vertical onPress={this.getTokenExpense.bind(this)} accessToken={this.props.accessToken} >
              <Icon active name="logo-usd" ios="logo-usd" />
              <Text>Expense</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
// EXTRA BUTTON FOR WHATEVER WE WANT IT TO BE LATER
// <Button vertical onPress={Actions.Profile} >
//   <Icon name="person" ios="ios-person"/>
//   <Text>Profile</Text>
// </Button>

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default Dock;
