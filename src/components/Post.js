import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

// import { Container } from './styles';

class Post extends Component {
  render () {
    return (
      <View style={styles.container} >
        <Image source={this.props.image} style={styles.image} />
        <Author email={this.props.email} nickname={this.props.nickname}/>
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain',
  }
})


export default Post