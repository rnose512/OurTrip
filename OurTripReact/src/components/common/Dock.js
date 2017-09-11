import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Dock extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={Actions.Trips} >
              <Icon name="plane" ios="ios-plane" />
              <Text>Trips</Text>
            </Button>
            <Button vertical onPress={Actions.Itinerary} >
              <Icon name="paper" ios="ios-paper" />
              <Text>Itinerary</Text>
            </Button>
            <Button vertical onPress={Actions.Expense} >
              <Icon active name="logo-usd" ios="logo-usd" />
              <Text>Expense</Text>
            </Button>
            <Button vertical onPress={Actions.Profile} >
              <Icon name="person" ios="ios-person"/>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

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
