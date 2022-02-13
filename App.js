import * as React from 'react';
import { View } from 'react-native';
import DjButton from './components/DJButton'
import DjButton2 from './components/DJButton2'
import DjButton3 from './components/DJButton3'
import DjButton4 from './components/DJButton4'
import StopMusic from './components/StopMusic'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <DjButton/>
        <DjButton2/>
        <DjButton3/>
        <DjButton4/>
        <StopMusic/>
      </View>
    );
  }
}
