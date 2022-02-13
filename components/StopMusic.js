import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
  stopMusic = async() => {
    await Audio.Sound.createAsync(
      {shouldPlay: false}
    );
  }

  render () {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.stopMusic}>
        <Text
          style = {styles.buttonText}>
          Stop Music
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    marginTop:10,
    marginLeft:50,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height:50,
    backgroundColor:'red',
    borderRadius:70,
  },
  buttonText: {
    fontWeight:'bold',
    fontSize:20,
  }
});

export default SoundButton;