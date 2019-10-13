import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform, Image } from 'react-native';
import icon from '../../assets/imgs/icon.png'

// import { Container } from './styles';

class Header extends Component {
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}> Lambe Lambe </Text>
        </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,

  },

})



export default Header

