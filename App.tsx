/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import DashboardScreen from './src/screens/DashboardScreen';
import MusicApp from './src/screens/MusicApp';
import BookReaderApp from './src/screens/BookReaderApp';
import AlarmApp from './src/screens/AlarmApp';
import IndividualAppEntry from './src/navigation/IndividialAppEntry';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="IndividualAppEntry"
          component={IndividualAppEntry}
        />
        <Stack.Screen name="BookReaderApp" component={BookReaderApp} />
        <Stack.Screen name="AlarmApp" component={AlarmApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
