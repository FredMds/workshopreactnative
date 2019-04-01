import React from 'react';
import { StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
         source={require('./assets/zen.jpg')}
         style={styles.container}
      >
        <Text
        style={styles.title}
        >Hello World</Text>
        <Text
        style={styles.subtitle}
        >Be connected everywhere</Text>
        <Image
          source={require('./assets/donald.jpg')}
          style={styles.avatar}
        />
        <Text
        style={styles.subtitle}
        >Join the network</Text>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: "white",
    fontSize: 50,
  },

    subtitle:{
    color: "#ffff",
    fontSize: 30,
    }
});
