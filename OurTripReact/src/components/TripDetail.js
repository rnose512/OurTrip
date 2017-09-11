import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const TripDetail = ({trip}) => {

  return (
    <Button onPress={Actions.TripShow} style={styles.buttonStyle}>
      <Text key={trip.id} style={styles.textStyle}>{trip.name}</Text>
    </Button>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  	textAlign: 'center'
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default TripDetail;