import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PianoScreen from './screens/PianoScreen';
import SolfeggioScreen from './screens/SolfeggioScreen';
import NotesScreen from './screens/NotesScreen';
import TheoryScreen from './screens/TheoryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Piano" component={PianoScreen} />
        <Stack.Screen name="Solfeggio" component={SolfeggioScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Theory" component={TheoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;