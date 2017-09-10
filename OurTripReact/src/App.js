import React, { Component } from 'react';
import { View } from 'react-native';
import RouterComponent from './Router';

class OurTrip extends Component {
	render() {
		return (
			<View style={styles.container}>
        <RouterComponent style={styles.routesStyle} />
			</View>
			);
	}
}

const styles = {
  container: {
   flex: 1,
   flexDirection: 'column',
  },
  routesStyle: {
    flex: 6
  }
}

export default OurTrip;