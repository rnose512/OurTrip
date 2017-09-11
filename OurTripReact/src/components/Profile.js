import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dock from './common/Dock';

const Profile = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Yo Dog</Text>
      <Dock style={styles.dock} />
    </View>
  );
};

const styles = {
  container: {
   flex: 1,
   justifyContent: 'center',
   bottom: 0,
  },
  profile: {
    flex: 4,
  },
  dock: {
    flex: 1,
  }
};

export default Profile;
