import React from 'react';
import { Text, View } from 'react-native';
import TripButton from './common/TripButton';

const TripDetail = ({trip}) => {

  return (
    <TripButton linkTo>
      <Text key={trip.id}>{trip.name}</Text>
    </TripButton>
  );
};


//this comes from props.children in card???

export default TripDetail;