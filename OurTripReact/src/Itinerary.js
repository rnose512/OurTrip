import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Calendar from './Calendar';
import axios from 'axios';
import Dock from './components/common/Dock';

class Itinerary extends Component {
  constructor(props){
    super(props)
  	this.state = {
  		events: []
  	}
  }

	componentWillMount() {
		axios.get('http://localhost:3000/destinations/1/events')
			.then(response => this.setState({ events: response.data.events }))
	}

	render(){
		return (
      <ImageBackground source={require('./images/tripshow.jpeg')} style={styles.image}>
        <ScrollView style={styles.trips}>
          <View style={styles.box}>
    				<Calendar style={styles.itinerary} events={this.state.events} />
          </View>
  				<Dock style={styles.dock} accessToken={this.props.accessToken}/>
        </ScrollView>
      </ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    backgroundColor:'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: {
    marginTop: 60,
  },
  dock: {
    flex: 1,
  }
})

export default Itinerary;
