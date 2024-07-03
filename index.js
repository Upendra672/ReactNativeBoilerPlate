/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import IndividualAppEntry from './src/navigation/IndividialAppEntry';
import { APP_ID } from '@env';

let EntryPoint;
let devMode = false;
if (devMode) {
  EntryPoint = App;
} 
else if (APP_ID === 'musicApp') {
  console.log(APP_ID);
  EntryPoint = IndividualAppEntry;
} 
else if (APP_ID === 'swaminarayan') {
  console.log(APP_ID);
  EntryPoint = App;
}


AppRegistry.registerComponent(appName, () => EntryPoint);