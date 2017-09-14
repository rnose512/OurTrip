import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from './Calendar';
import axios from 'axios';
import Dock from './components/common/Dock';

class Itinerary extends Component {
  	state = {
  		events: []
  	}

	componentWillMount() {
		axios.get('http://localhost:3000/destinations/1/events')
			.then(response => this.setState({ events: response.data.events }))
	}

	render(){
		return (
			<View style={styles.container} >
				<Calendar style={styles.itinerary} events={this.state.events} />
				<Dock style={styles.dock} accessToken={this.props.accessToken}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  itinerary: {

  },
  dock: {
    flex: 1,
  }
})

export default Itinerary;
