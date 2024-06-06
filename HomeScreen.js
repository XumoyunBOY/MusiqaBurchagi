import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Musiqa Burchagi</Text>
      <Button title="Learn Piano" onPress={() => navigation.navigate('Piano')} />
      <Button title="Solfeggio Lessons" onPress={() => navigation.navigate('Solfeggio')} />
      <Button title="Learn Notes" onPress={() => navigation.navigate('Notes')} />
      <Button title="Music Theory" onPress={() => navigation.navigate('Theory')} />
    </View>
  );
};

export default HomeScreen;