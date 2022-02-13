import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
  playSound = async() => {
    await Audio.Sound.createAsync(
      {uri: 'https://freesound.org/s/49658/'},
      {shouldPlay: true}
    );
  }

  render () {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.playSound}>
        <Text
          style = {styles.buttonText}>
          Bass
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    marginTop:200,
    marginLeft:50,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height:100,
    backgroundColor:'orange',
    borderRadius:70,
  },
  buttonText: {
    fontWeight:'bold',
    fontSize:20,
  }
});

export default SoundButton;